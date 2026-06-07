import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import { copyAr } from "../features/copy/ar";
import { getBlogPostBySlug } from "../features/blog/selectors";

const renderBlock = (block: string, index: number) => {
  const headingMatch = block.match(/^(#{1,3})\s+(.+)$/);
  if (headingMatch) {
    const level = headingMatch[1].length;
    const text = headingMatch[2].trim();

    if (level === 1) {
      return (
        <h2 key={index} className="article-heading article-heading--primary">
          {text}
        </h2>
      );
    }

    if (level === 2) {
      return (
        <h3 key={index} className="article-heading article-heading--secondary">
          {text}
        </h3>
      );
    }

    return (
      <h4 key={index} className="article-heading article-heading--tertiary">
        {text}
      </h4>
    );
  }

  if (block.startsWith(">")) {
    const quote = block
      .split("\n")
      .map((line) => line.replace(/^>\s?/, "").trim())
      .filter(Boolean)
      .join(" ");

    return (
      <blockquote key={index} className="article-quote">
        {quote}
      </blockquote>
    );
  }

  const listLines = block
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^-\s+/.test(line));

  if (listLines.length > 0 && listLines.length === block.split("\n").filter(Boolean).length) {
    return (
      <ul key={index} className="article-list">
        {listLines.map((line, lineIndex) => (
          <li key={`${index}-${lineIndex}`}>{line.replace(/^-\s+/, "")}</li>
        ))}
      </ul>
    );
  }

  return (
    <p key={index} className="article-paragraph">
      {block.replace(/\n/g, " ")}
    </p>
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug, DEFAULT_BLOG_LANGUAGE);

  if (!post) {
    return <Navigate to={routes.blog} replace />;
  }

  return (
    <Layout>
      <article className="site-page article-page">
        <header className="interior-hero article-hero">
          <div className="reading-shell">
          <Link to={routes.blog} className="editorial-back-link">
            {copyAr.common.backToBlog}
          </Link>

          <div className="article-hero__copy">
            <div className="editorial-meta">
              <span className="editorial-meta__strong">{post.tag}</span>
              <span aria-hidden="true">·</span>
              <time>{post.date}</time>
              <span aria-hidden="true">·</span>
              <span>
                {post.readTime} {copyAr.common.readLabel}
              </span>
            </div>

            <h1 className="interior-title">{post.title}</h1>
            <p className="interior-lede">{post.excerpt}</p>
          </div>
          </div>
        </header>

        <div className="paper-section article-reading">
          <div className="reading-shell">
            <img
              src={post.image}
              alt={post.title}
              className="article-cover"
            />
            <div className="article-body">
              {post.content.map((block, index) => renderBlock(block, index))}
            </div>
          </div>
        </div>

        <footer className="article-next">
          <div className="reading-shell">
            <p className="section-label">
              <span>03</span>
              <span lang="en" dir="ltr">Continue the conversation</span>
            </p>
            <h2>هل تفتح هذه الفكرة سؤالًا في عملك؟</h2>
            <p>يمكنك متابعة النقاش والكتابات الجديدة عبر LinkedIn.</p>
            <a
              href={siteConfig.external.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-button editorial-button--primary"
            >
              {copyAr.common.linkedInCta}
            </a>
          </div>
        </footer>
      </article>
    </Layout>
  );
};

export default BlogPost;

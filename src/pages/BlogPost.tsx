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
        <h2 key={index} className="pt-4 text-[1.625rem] font-bold leading-snug text-foreground md:text-[2rem]">
          {text}
        </h2>
      );
    }

    if (level === 2) {
      return (
        <h3 key={index} className="pt-3 text-[1.375rem] font-bold leading-snug text-foreground md:text-[1.625rem]">
          {text}
        </h3>
      );
    }

    return (
      <h4 key={index} className="pt-2 text-[1.125rem] font-semibold leading-7 text-foreground">
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
      <blockquote
        key={index}
        className="article-copy border-r-2 border-border pr-4 text-foreground/85"
      >
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
      <ul key={index} className="article-copy list-disc space-y-2 pr-5">
        {listLines.map((line, lineIndex) => (
          <li key={`${index}-${lineIndex}`}>{line.replace(/^-\s+/, "")}</li>
        ))}
      </ul>
    );
  }

  return (
    <p key={index} className="article-copy">
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
      <article className="py-16 md:py-24">
        <div className="reading-shell">
          <Link to={routes.blog} className="button-label mb-8 inline-flex text-primary hover:underline underline-offset-4">
            {copyAr.common.backToBlog}
          </Link>

          <header className="mb-10">
            <div className="meta-text mb-4 flex flex-wrap items-center gap-2">
              <span className="font-semibold text-foreground/80">{post.tag}</span>
              <span aria-hidden="true">·</span>
              <time>{post.date}</time>
              <span aria-hidden="true">·</span>
              <span>
                {post.readTime} {copyAr.common.readLabel}
              </span>
            </div>

            <h1 className="page-title">{post.title}</h1>
            <p className="lede mt-5">{post.excerpt}</p>
          </header>

          <div className="section-rule space-y-7 pt-8">
            <img
              src={post.image}
              alt={post.title}
              className="h-auto w-full border border-border object-cover"
              loading="lazy"
            />
            {post.content.map((block, index) => renderBlock(block, index))}
          </div>

          <div className="mt-10 section-rule pt-6">
            <a
              href={siteConfig.external.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="button-label inline-flex items-center rounded-sm border border-border px-4 py-2 text-foreground transition-colors hover:bg-secondary/70"
            >
              {copyAr.common.linkedInCta}
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

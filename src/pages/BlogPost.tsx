import { motion } from "framer-motion";
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
        <h2 key={index} className="text-2xl font-bold leading-snug text-foreground md:text-3xl">
          {text}
        </h2>
      );
    }

    if (level === 2) {
      return (
        <h3 key={index} className="text-xl font-bold leading-snug text-foreground md:text-2xl">
          {text}
        </h3>
      );
    }

    return (
      <h4 key={index} className="text-lg font-semibold leading-snug text-foreground">
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
        className="border-r-2 border-primary/45 bg-secondary/45 px-4 py-3 text-base leading-relaxed text-foreground/85"
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
      <ul key={index} className="space-y-2 text-base leading-relaxed text-foreground/90">
        {listLines.map((line, lineIndex) => (
          <li key={`${index}-${lineIndex}`} className="flex items-start gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{line.replace(/^-\s+/, "")}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={index} className="text-base leading-loose text-foreground/90">
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
      <article className="pt-16 pb-24 md:pt-24">
        <div className="container max-w-2xl">
          <Link to={routes.blog} className="mb-8 inline-flex text-sm font-medium text-primary hover:underline">
            {copyAr.common.backToBlog}
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.tag}</span>
              <span className="text-muted-foreground/30">·</span>
              <time className="text-xs text-muted-foreground/60">{post.date}</time>
              <span className="text-muted-foreground/30">·</span>
              <span className="text-xs text-muted-foreground/60">
                {post.readTime} {copyAr.common.readLabel}
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">{post.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="card-neural space-y-6 p-7 md:p-9"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-auto w-full rounded-md border border-border object-cover"
              loading="lazy"
            />
            {post.content.map((block, index) => renderBlock(block, index))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="mt-6 card-neural p-6"
          >
            <a
              href={siteConfig.external.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {copyAr.common.linkedInCta}
            </a>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

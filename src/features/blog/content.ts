import type { BlogPost, BlogLanguage } from "./types";
import { parseMarkdownPost } from "./markdown";

const markdownModules = import.meta.glob("../../content/blog/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

function loadBlogPosts(): BlogPost[] {
  return Object.entries(markdownModules)
    .map(([, rawMarkdown]) => {
      const parsed = parseMarkdownPost(rawMarkdown);

      return {
        slug: parsed.frontmatter.slug,
        title: parsed.frontmatter.title,
        excerpt: parsed.frontmatter.excerpt,
        date: parsed.frontmatter.dateDisplay,
        publishedAt: parsed.frontmatter.date,
        language: parsed.frontmatter.language,
        tag: parsed.frontmatter.tag,
        readTime: parsed.frontmatter.readTime,
        image: parsed.frontmatter.image,
        content: parsed.content,
      };
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

const ALL_MARKDOWN_POSTS = loadBlogPosts();

export function getBlogPostsFromMarkdown(language: BlogLanguage = "ar") {
  return ALL_MARKDOWN_POSTS.filter((post) => post.language === language);
}

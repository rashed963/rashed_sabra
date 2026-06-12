import { getBlogPostsFromMarkdown } from "./content";
import { DEFAULT_BLOG_LANGUAGE } from "./constants";
import type { BlogLanguage } from "./types";

export const getAllBlogPosts = (language: BlogLanguage = DEFAULT_BLOG_LANGUAGE) => getBlogPostsFromMarkdown(language);

export const getLatestBlogPosts = (
  limit: number,
  language: BlogLanguage = DEFAULT_BLOG_LANGUAGE,
) => getAllBlogPosts(language).slice(0, Math.max(0, limit));

export const getBlogPostBySlug = (slug?: string, language: BlogLanguage = DEFAULT_BLOG_LANGUAGE) =>
  getAllBlogPosts(language).find((post) => post.slug === slug);


import { blogPosts } from "./data";

export const getAllBlogPosts = () => blogPosts;

export const getBlogPostBySlug = (slug?: string) =>
  blogPosts.find((post) => post.slug === slug);


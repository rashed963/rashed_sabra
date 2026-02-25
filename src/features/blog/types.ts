export type BlogLanguage = "ar" | "en";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  language: BlogLanguage;
  tag: string;
  readTime: string;
  image: string;
  content: string[];
};


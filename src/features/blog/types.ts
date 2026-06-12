export type BlogLanguage = "ar" | "en";

export type BlogTopicId =
  | "engineering-leadership"
  | "arabic-nlp"
  | "robotics-simulation"
  | "general";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  language: BlogLanguage;
  topic: BlogTopicId;
  tag: string;
  readTime: string;
  image: string;
  content: string[];
};


import type { BlogLanguage, BlogPost, BlogTopicId } from "./types";

export type { BlogTopicId } from "./types";

const blogTopics: ReadonlyArray<{
  id: BlogTopicId;
  labels: Record<BlogLanguage, string>;
}> = [
  {
    id: "engineering-leadership",
    labels: { ar: "Product & Technology", en: "Product and engineering leadership" },
  },
  {
    id: "arabic-nlp",
    labels: { ar: "اللغة العربية وAI", en: "Arabic language and AI" },
  },
  {
    id: "robotics-simulation",
    labels: { ar: "الأتمتة والمحاكاة", en: "Automation and simulation" },
  },
  {
    id: "general",
    labels: { ar: "أفكار عامة", en: "General" },
  },
];

export function getBlogTopicOptions(language: BlogLanguage) {
  return blogTopics.map((topic) => ({
    id: topic.id,
    label: topic.labels[language],
  }));
}

export function getPostsByTopic(posts: BlogPost[], topic: BlogTopicId) {
  return posts.filter((post) => post.topic === topic);
}

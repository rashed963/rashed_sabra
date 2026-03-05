import type { BlogPost } from "./types";

export type BlogTopicId = "engineering-leadership" | "arabic-nlp" | "robotics-simulation" | "general";

export function getBlogTopic(post: BlogPost): BlogTopicId {
  const haystack = `${post.slug} ${post.tag} ${post.title} ${post.excerpt}`.toLowerCase();

  if (/(single-question|leadership|manager|team|ownership)/.test(haystack)) {
    return "engineering-leadership";
  }

  if (/(nlp|language|arabic)/.test(haystack)) {
    return "arabic-nlp";
  }

  if (/(automation|robot|cad|simulation|rpa)/.test(haystack)) {
    return "robotics-simulation";
  }

  return "general";
}

export function getPostsByTopic(posts: BlogPost[], topic: BlogTopicId) {
  return posts.filter((post) => getBlogTopic(post) === topic);
}

import { describe, expect, it } from "vitest";
import type { BlogPost } from "./types";
import { getBlogTopicOptions, getPostsByTopic } from "./topics";

function makePost(slug: string, topic: BlogPost["topic"]): BlogPost {
  return {
    slug,
    title: slug,
    excerpt: slug,
    date: "January 1, 2026",
    publishedAt: "2026-01-01",
    language: "en",
    topic,
    tag: slug,
    readTime: "1 min",
    image: "/placeholder.svg",
    content: [],
  };
}

describe("blog topics", () => {
  it("provides localized topic labels", () => {
    expect(getBlogTopicOptions("ar")[0].label).toBe("قيادة المنتج والهندسة");
    expect(getBlogTopicOptions("en")[0].label).toBe("Product and engineering leadership");
  });

  it("filters posts by authored topic metadata", () => {
    const posts = [
      makePost("single-question-for-managers", "engineering-leadership"),
      makePost("automation-and-rpa", "robotics-simulation"),
      makePost("product-journal", "general"),
    ];

    expect(getPostsByTopic(posts, "engineering-leadership")).toHaveLength(1);
    expect(getPostsByTopic(posts, "robotics-simulation")).toHaveLength(1);
    expect(getPostsByTopic(posts, "general")).toHaveLength(1);
  });
});

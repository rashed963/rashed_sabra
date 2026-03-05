import { describe, expect, it } from "vitest";
import type { BlogPost } from "./types";
import { getBlogTopic, getPostsByTopic } from "./topics";

function makePost(slug: string): BlogPost {
  return {
    slug,
    title: slug,
    excerpt: slug,
    date: "January 1, 2026",
    publishedAt: "2026-01-01",
    language: "en",
    tag: slug,
    readTime: "1 min",
    image: "/placeholder.svg",
    content: [],
  };
}

describe("blog topics", () => {
  it("classifies posts by topic", () => {
    expect(getBlogTopic(makePost("single-question-for-managers"))).toBe("engineering-leadership");
    expect(getBlogTopic(makePost("arabic-language-nlp-notes"))).toBe("arabic-nlp");
    expect(getBlogTopic(makePost("automation-and-rpa"))).toBe("robotics-simulation");
    expect(getBlogTopic(makePost("product-journal"))).toBe("general");
  });

  it("filters posts by topic", () => {
    const posts = [
      makePost("single-question-for-managers"),
      makePost("automation-and-rpa"),
      makePost("product-journal"),
    ];

    expect(getPostsByTopic(posts, "engineering-leadership")).toHaveLength(1);
    expect(getPostsByTopic(posts, "robotics-simulation")).toHaveLength(1);
    expect(getPostsByTopic(posts, "general")).toHaveLength(1);
  });
});

import { describe, expect, it } from "vitest";
import { getAllBlogPosts, getBlogPostBySlug } from "./selectors";

describe("blog selectors", () => {
  it("loads Arabic markdown posts", () => {
    const posts = getAllBlogPosts("ar");
    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => post.language === "ar")).toBe(true);
  });

  it("finds post by slug in Arabic set", () => {
    const post = getBlogPostBySlug("automation-where-to-start", "ar");
    expect(post).toBeDefined();
    expect(post?.title.length).toBeGreaterThan(0);
  });
});

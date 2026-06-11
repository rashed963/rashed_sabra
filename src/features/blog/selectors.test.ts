import { describe, expect, it } from "vitest";
import { getAllBlogPosts, getBlogPostBySlug } from "./selectors";

describe("blog selectors", () => {
  it("loads Arabic markdown posts", () => {
    const posts = getAllBlogPosts("ar");
    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => post.language === "ar")).toBe(true);
  });

  it("finds post by slug in Arabic set", () => {
    const post = getBlogPostBySlug("organizational-intelligence-leadership", "ar");
    expect(post).toBeDefined();
    expect(post?.title).toBe("هل نصمّم الشركات حول الهرم… أم حول الذكاء؟");
    expect(post?.image).toBe("/blog/organizational-intelligence.jpg");
  });

  it("does not publish the article template", () => {
    expect(getBlogPostBySlug("your-article-slug", "ar")).toBeUndefined();
  });
});

import { describe, expect, it } from "vitest";
import { getAllBlogPosts, getBlogPostBySlug, getLatestBlogPosts } from "./selectors";

describe("blog selectors", () => {
  it("loads Arabic markdown posts", () => {
    const posts = getAllBlogPosts("ar");
    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => post.language === "ar")).toBe(true);
  });

  it("loads the authored English editions", () => {
    const arabicPosts = getAllBlogPosts("ar");
    const posts = getAllBlogPosts("en");

    expect(posts.every((post) => post.language === "en")).toBe(true);
    expect(posts.map((post) => post.slug).sort()).toEqual(
      arabicPosts.map((post) => post.slug).sort(),
    );
    expect(getBlogPostBySlug("organizational-intelligence-leadership", "en")?.title).toBe(
      "Are we designing organizations around hierarchy or intelligence?",
    );
  });

  it("finds post by slug in Arabic set", () => {
    const post = getBlogPostBySlug("organizational-intelligence-leadership", "ar");
    expect(post).toBeDefined();
    expect(post?.title).toBe("هل نصمّم الشركات حول الهرم… أم حول الذكاء؟");
    expect(post?.image).toBe("/blog/organizational-intelligence.jpg");
  });

  it("returns the latest posts in publication order", () => {
    const posts = getLatestBlogPosts(2, "ar");

    expect(posts).toHaveLength(2);
    expect(posts[0].slug).toBe("organizational-intelligence-leadership");
    expect(new Date(posts[0].publishedAt).getTime()).toBeGreaterThanOrEqual(
      new Date(posts[1].publishedAt).getTime(),
    );
  });

  it("does not publish the article template", () => {
    expect(getBlogPostBySlug("your-article-slug", "ar")).toBeUndefined();
  });
});

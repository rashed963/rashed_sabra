import { describe, expect, it } from "vitest";
import {
  blogPostPath,
  getLanguageFromPath,
  getRoutes,
  localizePath,
  routes,
} from "./routes";

describe("localized routes", () => {
  it("keeps every existing Arabic route unchanged", () => {
    expect(getRoutes("ar")).toMatchObject({
      home: routes.home,
      journey: routes.journey,
      blog: routes.blog,
      cv: routes.cv,
    });
  });

  it("adds English pages below the /en prefix", () => {
    expect(getRoutes("en").journey).toBe("/en/journey");
    expect(blogPostPath("a-clear-system", "en")).toBe("/en/blog/a-clear-system");
    expect(getLanguageFromPath("/en/blog")).toBe("en");
  });

  it("switches between equivalent Arabic and English URLs", () => {
    expect(localizePath("/blog/an-article", "en")).toBe("/en/blog/an-article");
    expect(localizePath("/en/blog/an-article", "ar")).toBe("/blog/an-article");
  });
});

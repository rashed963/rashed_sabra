import { describe, expect, it } from "vitest";
import { parseMarkdownPost } from "./markdown";

const sampleMarkdown = `---
slug: test-post
title: عنوان تجريبي
excerpt: هذا ملخص.
date: 2026-02-25
tag: تجربة
readTime: ٣ د
image: /placeholder.svg
language: ar
---
# عنوان داخلي

هذه فقرة أولى.

- نقطة ١
- نقطة ٢
`;

describe("parseMarkdownPost", () => {
  it("parses frontmatter and markdown content", () => {
    const parsed = parseMarkdownPost(sampleMarkdown);

    expect(parsed.frontmatter.slug).toBe("test-post");
    expect(parsed.frontmatter.language).toBe("ar");
    expect(parsed.frontmatter.date).toBe("2026-02-25");
    expect(parsed.frontmatter.dateDisplay.length).toBeGreaterThan(0);
    expect(parsed.content[0]).toBe("عنوان داخلي");
    expect(parsed.content[1]).toContain("هذه فقرة أولى");
    expect(parsed.content[2]).toContain("• نقطة ١");
  });
});

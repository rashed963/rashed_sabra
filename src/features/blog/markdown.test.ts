import { describe, expect, it } from "vitest";
import { parseMarkdownPost } from "./markdown";

const sampleMarkdown = `---
slug: test-post
title: Test title
excerpt: Test excerpt.
date: 2026-02-25
tag: Test
readTime: 3 min
image: /placeholder.svg
language: en
---
# Internal heading

This is the first paragraph.

- Point one
- Point two
`;

describe("parseMarkdownPost", () => {
  it("parses frontmatter and preserves markdown blocks", () => {
    const parsed = parseMarkdownPost(sampleMarkdown);

    expect(parsed.frontmatter.slug).toBe("test-post");
    expect(parsed.frontmatter.language).toBe("en");
    expect(parsed.frontmatter.date).toBe("2026-02-25");
    expect(parsed.frontmatter.dateDisplay.length).toBeGreaterThan(0);
    expect(parsed.content[0]).toBe("# Internal heading");
    expect(parsed.content[1]).toBe("This is the first paragraph.");
    expect(parsed.content[2]).toBe("- Point one\n- Point two");
  });
});

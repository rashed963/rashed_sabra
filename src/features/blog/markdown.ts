import { z } from "zod";
import type { BlogLanguage } from "./types";

const frontmatterSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  tag: z.string().min(1),
  readTime: z.string().min(1),
  image: z.string().min(1),
  language: z.enum(["ar", "en"]),
});

export type BlogFrontmatter = z.infer<typeof frontmatterSchema>;

type ParsedMarkdown = {
  frontmatter: BlogFrontmatter & { dateDisplay: string };
  content: string[];
};

function normalize(input: string) {
  return input.replace(/\r\n/g, "\n").trim();
}

function parseFrontmatter(raw: string) {
  const normalized = normalize(raw);
  if (!normalized.startsWith("---\n")) {
    throw new Error("Markdown file is missing frontmatter start delimiter.");
  }

  const endMarker = "\n---\n";
  const endIndex = normalized.indexOf(endMarker, 4);
  if (endIndex === -1) {
    throw new Error("Markdown file is missing frontmatter end delimiter.");
  }

  const frontmatterBody = normalized.slice(4, endIndex);
  const markdownBody = normalized.slice(endIndex + endMarker.length).trim();
  const pairs = Object.fromEntries(
    frontmatterBody
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf(":");
        if (separatorIndex <= 0) {
          throw new Error(`Invalid frontmatter line: ${line}`);
        }

        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim();
        return [key, value];
      }),
  );

  const parsedFrontmatter = frontmatterSchema.parse(pairs);
  return { frontmatter: parsedFrontmatter, markdownBody };
}

function markdownToParagraphs(markdown: string) {
  return markdown
    .split(/\n\s*\n/g)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) =>
      block
        .replace(/^#{1,6}\s+/gm, "")
        .replace(/^-\s+/gm, "• ")
        .replace(/\n/g, " ")
        .trim(),
    );
}

function formatDateForLanguage(date: string, language: BlogLanguage) {
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  const locale = language === "ar" ? "ar" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsedDate);
}

export function parseMarkdownPost(rawMarkdown: string): ParsedMarkdown {
  const { frontmatter, markdownBody } = parseFrontmatter(rawMarkdown);

  return {
    frontmatter: {
      ...frontmatter,
      dateDisplay: formatDateForLanguage(frontmatter.date, frontmatter.language),
    },
    content: markdownToParagraphs(markdownBody),
  };
}

import { z } from "zod";
import { parseFrontmatter } from "../../lib/parse-frontmatter";
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
  topic: z.enum([
    "engineering-leadership",
    "arabic-nlp",
    "robotics-simulation",
    "general",
  ]),
});

type BlogFrontmatter = z.infer<typeof frontmatterSchema>;

type ParsedMarkdown = {
  frontmatter: BlogFrontmatter & { dateDisplay: string };
  content: string[];
};

function markdownToBlocks(markdown: string) {
  return markdown
    .split(/\n\s*\n/g)
    .map((block) => block.trim())
    .filter(Boolean);
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
  const { data, body } = parseFrontmatter(rawMarkdown, frontmatterSchema);

  return {
    frontmatter: {
      ...data,
      dateDisplay: formatDateForLanguage(data.date, data.language),
    },
    content: markdownToBlocks(body),
  };
}

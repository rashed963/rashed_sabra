import { z } from "zod";

function normalize(input: string) {
  return input.replace(/\r\n/g, "\n");
}

export function parseFrontmatter<T extends z.ZodTypeAny>(
  raw: string,
  schema: T,
): { data: z.infer<T>; body: string } {
  const normalized = normalize(raw).trimStart();
  if (!normalized.startsWith("---\n")) {
    throw new Error("Markdown file is missing frontmatter start delimiter.");
  }

  // Match closing --- followed by a newline or end of string
  const endMarkerMatch = /\n---(?:\n|$)/.exec(normalized.slice(4));
  if (!endMarkerMatch) {
    throw new Error("Markdown file is missing frontmatter end delimiter.");
  }

  const endIndex = 4 + endMarkerMatch.index;
  const frontmatterBody = normalized.slice(4, endIndex);
  const body = normalized.slice(endIndex + endMarkerMatch[0].length).trim();

  const pairs = Object.fromEntries(
    frontmatterBody
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const sep = line.indexOf(":");
        if (sep <= 0) throw new Error(`Invalid frontmatter line: ${line}`);
        return [line.slice(0, sep).trim(), line.slice(sep + 1).trim()];
      }),
  );

  return { data: schema.parse(pairs), body };
}

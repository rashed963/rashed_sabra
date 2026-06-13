import { z } from "zod";
import { parseFrontmatter } from "../../lib/parse-frontmatter";
import type { Milestone, MilestoneType } from "./types";

const milestoneFrontmatterSchema = z.object({
  id: z.string().min(1),
  order: z.string(),
  period: z.string().min(1),
  title: z.string().min(1),
  organization: z.string().min(1),
  location: z.string().optional(),
  type: z.enum(["education", "role", "leadership", "product", "ai"]),
  context: z.string().min(1),
  impact: z.string().optional(),
  lesson: z.string().optional(),
});

const themeFrontmatterSchema = z.object({
  num: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

type JourneyTheme = z.infer<typeof themeFrontmatterSchema>;

function parseBulletList(body: string): string[] {
  return body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim())
    .filter(Boolean);
}

export function parseMilestone(raw: string): Milestone {
  const { data, body } = parseFrontmatter(raw, milestoneFrontmatterSchema);
  return {
    id: data.id,
    period: data.period,
    title: data.title,
    organization: data.organization,
    location: data.location,
    type: data.type as MilestoneType,
    context: data.context,
    actions: parseBulletList(body),
    impact: data.impact,
    lesson: data.lesson,
  };
}

export function parseTheme(raw: string): JourneyTheme {
  const { data } = parseFrontmatter(raw, themeFrontmatterSchema);
  return data;
}

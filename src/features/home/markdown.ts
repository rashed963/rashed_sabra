import { z } from "zod";
import { parseFrontmatter } from "../../lib/parse-frontmatter";

const methodStepSchema = z.object({
  order: z.string(),
  title: z.string().min(1),
  body: z.string().min(1),
});

const offerSchema = z.object({
  order: z.string(),
  title: z.string().min(1),
  timeframe: z.string().min(1),
  who: z.string().min(1),
  include: z.string().min(1),
  outcome: z.string().min(1),
});

const snapshotSchema = z.object({
  order: z.string(),
  title: z.string().min(1),
  before: z.string().min(1),
  after: z.string().min(1),
});

const faqSchema = z.object({
  order: z.string(),
  q: z.string().min(1),
  a: z.string().min(1),
});

export type MethodStep = z.infer<typeof methodStepSchema>;
export type Offer = z.infer<typeof offerSchema>;
export type Snapshot = z.infer<typeof snapshotSchema>;
export type FaqItem = z.infer<typeof faqSchema>;

export function parseMethodStep(raw: string): MethodStep {
  return parseFrontmatter(raw, methodStepSchema).data;
}

export function parseOffer(raw: string): Offer {
  return parseFrontmatter(raw, offerSchema).data;
}

export function parseSnapshot(raw: string): Snapshot {
  return parseFrontmatter(raw, snapshotSchema).data;
}

export function parseFaqItem(raw: string): FaqItem {
  return parseFrontmatter(raw, faqSchema).data;
}

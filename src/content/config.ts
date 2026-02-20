import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lang: z.enum(["ar", "en"]).default("ar"),
      description: z.string(),
      publishDate: z.coerce.date(),
      status: z.enum(["draft", "scheduled", "published"]).default("published"),
      draft: z.boolean().default(false),
      category: z.string().optional(),
      tags: z.array(z.string()).default([]),
      series: z.string().optional(),
      part: z.number().int().positive().optional(),
      heroImage: image().optional(),
    }),
});

const journey = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string(),
    themes: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    timeline: z.array(
      z.object({
        period: z.string(),
        title: z.string(),
        summary: z.string(),
        highlights: z.array(z.string()).default([]),
      })
    ),
    links: z
      .object({
        linkedin: z.string().optional(),
        github: z.string().optional(),
        email: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog, journey };

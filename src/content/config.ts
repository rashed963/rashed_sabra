import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      series: z.string().optional(),
      part: z.number().int().positive().optional(),
      draft: z.boolean().default(false),
      heroImage: image().optional(),
    }),
});

const profile = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog, profile };

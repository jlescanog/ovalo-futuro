import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['ingles', 'educacion', 'ia']),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(true),
    cover: z.string().nullable().optional(),
    coverAlt: z.string().default(''),
  }),
});
export const collections = { posts };

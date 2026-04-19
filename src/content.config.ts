/**
 * src/content.config.ts — Astro 6 Content Layer API
 *
 * Breaking change from Astro 4→6:
 *   - File must live at src/content.config.ts (not src/content/config.ts)
 *   - Collections require a `loader` (glob, file, or custom)
 *   - Entries use `id` (not `slug`)
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base:    './src/content/blog',
  }),
  schema: z.object({
    title:    z.string(),
    description: z.string(),
    pubDate:  z.coerce.date(),
    image:    z.string(),
    category: z.string().optional().default('Strategy'),
    author:   z.string().optional().default('Manuel Felipe Vecino'),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };

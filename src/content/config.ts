import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    image:       z.string(),
    category:    z.string().optional().default('Strategy'),
    author:      z.string().optional().default('Manuel Felipe Vecino'),
    featured:    z.boolean().optional().default(false),
  }),
});

export const collections = { blog };

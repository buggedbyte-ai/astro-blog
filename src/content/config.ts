import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        date: z.string(),
        featured: z.boolean().default(false)
    })
});

export const collections = {
    posts
};

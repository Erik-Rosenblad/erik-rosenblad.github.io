// Astro
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Constants
const blog = defineCollection({
    type: "content_layer",

    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/blog"
    }),

    schema: () => z.object({
        new: z.boolean(),
        title: z.string(),
        minRead: z.number(),
        pubDate: z.date(),
        modDate: z.date().optional(),
        description: z.string(),
        canonicalURL: z.string().optional(),
    }),
});

export const collections = { blog };

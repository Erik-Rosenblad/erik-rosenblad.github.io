// Astro
import { defineConfig } from "astro/config";

// Tailwind
import tailwind from "@astrojs/tailwind";

// React
import react from "@astrojs/react";

// Remark
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";

// Config
import { SITE } from "./src/config";

export default defineConfig({
    site: SITE.website,

    integrations: [
        tailwind({
            applyBaseStyles: false
        }),

        react(),
    ],

    markdown: {
        remarkPlugins: [
            remarkToc,
            [
                remarkCollapse,
                {
                    test: "Table of contents"
                }
            ]
        ],

        shikiConfig: {
            theme: "vesper",
            wrap: true,
        },
    },

    vite: {
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"],
        },
    },

    scopedStyleStrategy: "where",

    experimental: {
        contentLayer: true,
    },
});

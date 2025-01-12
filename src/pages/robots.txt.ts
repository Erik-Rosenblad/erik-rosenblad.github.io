// Astro
import type { APIRoute } from "astro";

// Config
import { SITE } from "@config";

const robots = `
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.website).href}
`.trim();

export const GET: APIRoute = () => new Response(robots, {
    headers: {
        "Content-Type": "text/plain"
    }}
);

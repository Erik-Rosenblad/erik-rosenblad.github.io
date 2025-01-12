// Packages
import rss from "@astrojs/rss";

// Astro
import { getCollection } from "astro:content";

// Utils
import getSortedPosts from "@utils/getSortedPosts";

// Config
import { SITE } from "@config";

// Functions
export async function GET() {
    const papers = await getCollection("blog", ({ data }) => !data.new);
    const sortedPapers = getSortedPosts(papers);

    return rss({
        title: SITE.title + "'s Papers",
        site: SITE.website,
        description: `Papers of Erik Rosenblad blog.`,
        items: sortedPapers.map(({ data, slug }) => ({
            link: `papers/${slug}`,
            title: data.title,
            description: data.description,
            pubDate: new Date(data.pubDate),
        })),
    });
}

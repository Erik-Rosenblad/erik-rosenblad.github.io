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
    const news = await getCollection("blog", ({ data }) => data.new);
    const sortedNews = getSortedPosts(news);

    return rss({
        title: SITE.title + "'s News",
        site: SITE.website,
        description: `News of Erik Rosenblad blog.`,
        items: sortedNews.map(({ data, slug }) => ({
            link: `news/${slug}`,
            title: data.title,
            description: data.description,
            pubDate: new Date(data.pubDate),
        })),
    });
}

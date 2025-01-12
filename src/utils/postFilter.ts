// Astro
import type { CollectionEntry } from "astro:content";

// Functions
const postFilter = ({ data }: CollectionEntry<"blog">) => {
    const isPubDatePassed = Date.now() > new Date(data.pubDate).getTime();
    return import.meta.env.DEV || isPubDatePassed;
};

export default postFilter;

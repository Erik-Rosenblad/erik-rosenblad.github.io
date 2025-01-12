// Astro
import type { CollectionEntry } from "astro:content";

// Utils
import postFilter from "./postFilter";

// Functions
const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
    return posts
        .filter(postFilter)
        .sort(
            (a, b) => new Date(b.data.pubDate).getTime()
                    - new Date(a.data.pubDate).getTime()
        );
};

export default getSortedPosts;

// Astro
import type { CollectionEntry } from "astro:content";

// Styles
import "@styles/base.css";

// Interfaces
export interface Props {
    slug: string;
    frontmatter: CollectionEntry<"blog">["data"];
}

// Functions
export default function Card({ slug, frontmatter }: Props) {
    const { title, description, minRead, pubDate } = frontmatter;
    const href = frontmatter.new ? `/news/${slug}` : `/papers/${slug}`;

    return (
        <div className="space-y-0.5">
            <p className="text-mid">
                <a className="text-skin-accent hover:underline" href={href}>
                    {title}
                </a>
            </p>

            <p className="text-mid">{description}</p>
            <p className="text-sm pt-1">
                {pubDate.toLocaleDateString()} | ~{minRead} minutes read
            </p>
        </div>
    );
}

// Astro
import type { CollectionEntry } from "astro:content";

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
            <a
                className="text-sm text-skin-accent hover:underline"
                href={href}
            >
                {title}
            </a>

            <p className="text-sm">{description}</p>
            <p className="text-xs  pt-1">
                {pubDate.toLocaleDateString()} - {minRead} minutes read
            </p>
        </div>
    );
}

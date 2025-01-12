// Astro
import type { CollectionEntry } from "astro:content";

// Fuse
import Fuse from "fuse.js";

// React
import { useEffect, useState, useMemo, type FormEvent } from "react";

// Components
import Card from "@components/Card";

// Types
export type SearchPost = {
    title: string;
    description: string;
    data: CollectionEntry<"blog">["data"];
    slug: string;
};

// Interfaces
interface SearchResult {
    post: SearchPost;
}

interface Props {
    searchList: SearchPost[];
}

// Functions
export default function SearchBar({ searchList }: Props) {
    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);

    const inputEvent = (e: FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const fuse = useMemo(() => new Fuse(searchList, {
        keys: ["title", "description"],
        includeMatches: true,
        findAllMatches: true,
        threshold: 0,
        distance: 0,
    }), [searchList]);

    useEffect(() => {
        const url = new URLSearchParams(window.location.search).get("q");

        if (url) {
            setInput(url);
        }
    }, []);

    useEffect(() => {
        if (input.length > 0) {
            setSearchResults(fuse.search(input));

            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set("q", input);

            const newRelativePathQuery =
                window.location.pathname + "?" + searchParams.toString();

            history.replaceState(history.state, "", newRelativePathQuery);
        } else {
            setSearchResults([]);
            history.replaceState(history.state, "", window.location.pathname);
        }
    }, [input]);

    return (
        <>
            <input
                className="border-b-[0.1rem] bg-skin-fill focus:outline-none w-full py-3"
                type="text"
                value={input}
                placeholder="Search"
                onChange={inputEvent}
            />

            <div className="pt-4 space-y-6">
                {searchResults && searchResults.map(({ item }) => (
                    <Card slug={item.slug} frontmatter={item.data}/>
                ))}
            </div>
        </>
    );
}

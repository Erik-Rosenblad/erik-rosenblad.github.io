import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
    title: "Erik Rosenblad",
    author: "Erik Rosenblad",
    website: "https://erik-rosenblad.github.io",
    description: "Personal website",
    page_size: 6,
};

export const SOCIALS: SocialObjects = [
    {
        name: "Email",
        href: "mailto:erik-rosenblad@tutamail.com",
        svgPath: "/assets/images/tuta-logo.svg"
    },

    {
        name: "Codeberg",
        href: "https://codeberg.org/Erik-Rosenblad",
        svgPath: "/assets/images/codeberg-logo.svg"
    },

    {
        name: "GitHub",
        href: "https://github.com/Erik-Rosenblad",
        svgPath: "/assets/images/github-logo.svg"
    },

    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/Erik-Rosenblad",
        svgPath: "/assets/images/linkedin-logo.svg"
    },
];

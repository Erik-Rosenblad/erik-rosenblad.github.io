function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
          return `rgba(var(${variableName}), ${opacityValue})`;
        }

        return `rgb(var(${variableName}))`;
    };
}

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

    theme: {
        extend: {
            textColor: {
                skin: {
                    base: withOpacity("--color-text-base"),
                    accent: withOpacity("--color-accent"),
                    inverted: withOpacity("--color-fill"),
                },
            },

            backgroundColor: {
                skin: {
                    fill: withOpacity("--color-fill"),
                    accent: withOpacity("--color-accent"),
                    inverted: withOpacity("--color-text-base"),
                    card: withOpacity("--color-card"),
                    "card-muted": withOpacity("--color-card-muted"),
                },
            },

            outlineColor: {
                skin: {
                    fill: withOpacity("--color-accent"),
                },
            },

            borderColor: {
                skin: {
                    line: withOpacity("--color-border"),
                    fill: withOpacity("--color-text-base"),
                    accent: withOpacity("--color-accent"),
                },
            },

            fill: {
                skin: {
                    base: withOpacity("--color-text-base"),
                    accent: withOpacity("--color-accent"),
                },
                transparent: "transparent",
            },

            stroke: {
                skin: {
                    accent: withOpacity("--color-accent")
                }
            },

            fontFamily: {
                sans: ["Cascadia"],
                serif: ["Cascadia"],
                mono: ["Cascadia"],
            },

            typography: {
                DEFAULT: {
                    css: {
                        pre: {
                            color: false,
                        },

                        code: {
                            color: false,
                        },

                        "--tw-prose-body": "--color-text-base",
                    },
                },
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};

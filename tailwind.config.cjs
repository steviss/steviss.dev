/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 0.25rem 1rem 0 rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        ibmplex: ["IBM Plex Sans", "sans-serif"],
        tektur: ["Tektur", "cursive"],
      },
      spacing: {
        "1/2": "50%",
      },
      width: {
        auto: "auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

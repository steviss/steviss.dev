/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 0.25rem 2rem 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 0.25rem 1rem 0 rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        //remove ibmplex
        ibmplex: ['IBM Plex Sans', 'sans-serif'],
        tektur: ['Tektur', 'cursive'],
        nunito: [' Nunito', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
      fontWeight: {
        oblique: 1000,
      },
      spacing: {
        '1/2': '50%',
      },
      width: {
        auto: 'auto',
      },
      height: {
        'd-screen': '100dvh',
      },
      colors: {
        primary: '#fbab7e',
        secondary: '#e06c22',
        'bg-primary': '#120c0b',
        'bg-secondary': '#1f1513',
        lightbg: 'white',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

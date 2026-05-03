/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          800: 'var(--color-gray-800)',
        },
      },
      spacing: {
        'section': 'var(--space-section)',
        'container': 'var(--space-container)',
        'gap': 'var(--space-gap)',
      },
      transitionDuration: {
        'base': 'var(--transition-base)',
      },
    },
  },
  plugins: [],
};

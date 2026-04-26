/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2E4F',
          light: '#243a61',
          dark: '#122040',
        },
        gold: { DEFAULT: '#C9A84C', light: '#D4BA6A', dark: '#B8953A' },
        cream: '#FAF8F5',
        ivory: '#F5F0E8',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Jost', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

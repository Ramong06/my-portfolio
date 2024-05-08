/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.6)',
      },
      fontFamily: {
        handwriting: ['Great Vibes', 'cursive'],
      }
    },
  },
  plugins: [],
};

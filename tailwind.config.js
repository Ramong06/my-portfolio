/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:  {
        darkPurple: '#0D062B',
        lightDarkPurple: '#1a133e',
      },
      boxShadow: {
        'text-shadow': '2px 2px 2px rgba(0, 0, 0, 0.6)',
      },
      fontFamily: {
        handwriting: ['Great Vibes', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

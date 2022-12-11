/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#070707',
        'maize-crayola': '#EEC643',
      },
    },
  },
  plugins: [],
}

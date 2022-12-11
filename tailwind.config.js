/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#070707',
        'maize-crayola': '#EEC643',
      },
      keyframes: {
        'terminal-cursor': {
          '0%': {
            opacity: 0,
          },
          '40%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
          '90%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{templates,components}/**/*.{twig,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'staatliches': '"Staatliches", sans-serif'
      }
    },
  },
  plugins: [],
}

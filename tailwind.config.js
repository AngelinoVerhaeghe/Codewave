/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './slices/**/*.{js,ts,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins Variable', 'sans-serif'],
        heading: ['Merriweather Variable', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


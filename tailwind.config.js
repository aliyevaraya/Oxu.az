/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{htm,js}", "./**/*.{htm,js}"],
  theme: {
    screens: {
      'xs': '576px',
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1024px',
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'MyGray': '808080',
        'MyFeijoa': 'A4DC7C',
        'MyOrange': 'E07D54',
        'MyYellowGeranium': 'FFE1A0',
        'MySkyBlue': '8BC3E4'
      }
    },
  },
  plugins: [],
}
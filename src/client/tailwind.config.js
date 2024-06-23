/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: ['class', '[class*="dark"]'],
  theme: {
    extend: {
      colors: {
        'my-gray': '#808080',
        'my-white-smoke': '#F3F3F3',

        'my-feijoa':     '#A4DC7C',
        'my-feijoa-inv': '#5b2383',
        
        'my-orange': '#E07D54',
        
        'my-yellow-geranium':     '#FFE1A0',
        'my-yellow-geranium-inv': '#3D2C02',
        
        'my-skyblue':     '#8BC3E4',
        'my-skyblue-inv': '#713a1a',
      },
      fontFamily: {
        'Enriqueta': ['Enriqueta'],
        'Ephesis': ['Ephesis'], 

        // default font
        sans: ['Enriqueta'],
      }
    },
  },
  plugins: [],
}
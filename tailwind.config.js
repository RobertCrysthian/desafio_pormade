/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black_pormade: '#212121',
      green_pormade: '#3CB62C',
      grey_pormade: '#414141',
      dark_grey: '#212121',
      light_green: '#509D45',
      transparent: '#61616180',
      grey_text: 'cinzaLetra',
      white_pormade: '#D9D9D9',
      black: '#000000;',
      yellow: '#FFC700'
    },
    backgroundPosition: {
      'right-top': 'right top',
      'right-bottom' : 'right bottom'
    },
    extend: {
      backGroundImage: {
        leaves : "url('src/assets/images/folha.png')",

      },
    },
  },
  plugins: [],
}


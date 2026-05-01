/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../img/main-background.png')",
        'footer': "url('../img/map.png')",
      },

      important: true,

      colors: {
      default: '#2A2C68',
      primary: '#FBEC4F',
      secondary: '#616161',
      },
      
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'sans-serif'],
      },

      content: {
        'link': 'url("../img/testi_before.png")',
      },

      container: {
        center: true,
      },

      objectPosition: {
        'card1': '32% 40%',
        'card2': '61% 29%',
        'card3': '58% 15%',
        'card4': '50% 11%',
      }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

}

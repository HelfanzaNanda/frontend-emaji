const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        'true-gray': colors.trueGray,
        indigo: colors.indigo,
        rose: colors.rose,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

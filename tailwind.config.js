const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
}

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto',
      },
      dropShadow: {
        custom: '0 0 10px var(--color-secondary)',
        custombis: '0 0 5px var(--color-tertiary)',
      },
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
      quaternary: 'var(--color-quaternary)',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      orange: colors.orange,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      indigo: colors.indigo,
    },
  },
};

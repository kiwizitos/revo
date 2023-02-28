/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      boxShadow: {
        solidBox: '0.5rem 0.5rem #373A50',
      },
      colors: {
        darkBlue: '#373A50',
        blue: '#9297CB',
        orange: '#EE7036',
        dust: '#F7CB9A',
        salmon: '#F6C1A7',
        green: '#B6C796',
        white: '#FFFFFF',
        gray: '#CACACA',
        black: '#191919',
      },
      fontFamily: {
        Nunito: [
          'NunitoSans-Regular',
          'Nunito',
          ...defaultTheme.fontFamily.sans,
        ],
        Montserrat: ['Montserrat-Bold', 'Montserrat'],
        SaoTorpes: ['Sao Torpes'],
      },
    },
  },
  plugins: [],
}

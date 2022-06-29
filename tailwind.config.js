/** @type {import('tailwindcss').Config} */
// import colors from 'tailwindcss/colors'
const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  darkMode:'class',
  content: [
    "./resources/views/*.edge",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zhCN: ['-apple-system','BlinkMacSystemFont','Segoe UI,PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'],
        DIN: ['DIN','Helvetica Neue','Helvetica','Arial','sans-serif']
      },
      colors:{
        primary:colors.cyan,
        secondary:colors.slate
      },
      lineHeight:{
        "0":"0"
      },
      boxShadow:{
        'zx':'0 4px 12px rgb(31 45 61 / 5%)'
      }
    },
  },
  plugins: [],
  corePlugins:{
    preflight: false
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        nilla: '#00baf2',
        lightnilla: '#00afe3', // added missing '#' here
        bgc: '#f5f7fa',
      },
      screens: {
        'verysmall': { 'max': '399px' },
        'small': { 'max': '420px' },
        'medium': { 'max': '768px' },
        'large': { 'max': '1070px' }, // fixed missing quote and comma
      },
    },
  },
  plugins: [],
}

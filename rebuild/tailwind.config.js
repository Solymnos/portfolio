/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent : 'transparent',
        current : 'currentColor',
        'primary' : '#D7390A',
        'secondary' : '#FFFFFF',
        'bgDark' : '#0C0C0C',
        'plum' : '#FADADD',
        'primary-transparent' : '#D7390A88'
      },
      spacing : {
        'card-size' : '500px'
      },
      flex : {
        '12' : '1.2',
        '08' : '0.8',
      },
      zIndex : {
        '_10' : '10',
        '_99' : '99',
        '_5' : '5',
      },
    },
  },
  plugins: [],
}

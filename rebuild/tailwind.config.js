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
      }
    },
  },
  plugins: [],
}

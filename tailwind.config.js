/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        "blue-gradient-1":'#787FF6',
        "blue-gradient-2":'#4ADEDE',
        "violet-gradient-1":'#6096FD',
        "violet-gradient-2":'#AA36FD',
        "purple-gradient-1":'#D17EF3',
        "purple-gradient-2":'#906EDB'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        primary:{
          black: '#1E1E1E',
          red: '#9E3500',
          grey: '#757575',
          white:'#F5F5F5',
        },
        secondary:{
          black:'#111111',
          red:'#FF0017',
          grey:'#CCCCCC',
        },
        clear:{
          grey:'#000000e1',
          white: '#CBDCCB'
        }
      }
    },
  },
  plugins: [],
}


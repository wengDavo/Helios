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
          white:'#F5F5F5'
        },
        secondary:{
          black:'#111111',
          grey:'#7E7E7E',
          red:'#FF0017'
        },
        tertiary:{
          grey:'#CCCCCC',
          white:'#E5E5E5',
          red:'#9E3500'
        }
      }
    },
  },
  plugins: [],
}


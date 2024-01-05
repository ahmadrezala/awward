/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
 
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
     body: ['MonumentExtended'],
     'ultra': ['Ultrabold']
     
    },
  extend: {

    keyframes: {
      wiggle: {
        '0%': { top: '0px' },
        '100%': { top: '20px' },
      }
    },

    animation: {
      wiggle: 'wiggle 1s linear 5 alternate',
    }


  },
  },
  plugins: [],
  }


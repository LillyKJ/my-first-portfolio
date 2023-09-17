// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        gray: {
          600: '#3a3b46',
          500: '#5b5d6f',
          400: '#7b7e8f',
          300: '#aeb1c3',
          200: '#dcdfed',
          100: '#f6f6f9',
          disable: '#dcdfed'
        },
        orange: {
          600: '#e44a0c',
          500: '#ff7037',
          400: '#ff986f',
          300: '#ffb899',
          200: '#ffd5c2',
          100: '#fff1ec',


          pressed: '#e44a0c',
          default: '#ff7037',
          hover: '#ff986f',

          
        },
        
        yellow: {
          200: '#ffca62',
          100: '#fff5ec',
        },
        blue: {
          500: '#76d0fc',
          100: '#ecfbff',
        },
        green: {
          500: '#1ccd83',
          100: '#e7fdf4',
        },
        pink: {
          500: '#fa8ac0',
        },
        etc: {
          black: '#000',
          white: '#fff',
          red: '#ea1010',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

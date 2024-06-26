/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      },
      colors: {
        primary: {
          DEFAULT: '#D97706', // نفس الكود اللوني لـ bg-yellow-600
        },
        creamy:{
          DEFAULT: '#FFFDD0',
        },
        castna:{
          DEFAULT: '#954535',
        },
        Olive:{
          DEFAULT:'#808000',
        },
        orgoani:{
          DEFAULT:'#4B0082'
        },
        baig:{
          DEFAULT:'#F5F5DC'
        },
        darkblue:{
          DEFAULT:'#000080'
        },
      },
    },
  },
 
  plugins: [],

}

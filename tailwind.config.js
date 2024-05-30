/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';



export default {

  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      ...colors,
      'putih':'#FEFEFE',
      'hitam': '#1e1e1e',
      'coklatT': '#ECB159',
      'coklatG': '#B67352',
      'oren': '#FA6906',
      'biru': '#09C3F8',
      'bg': '#FEFBF6'
    },
    screens: {
      'lg' : '1024px',
      'md' : '768px',
      'sm': '640px',
      'phone': '350px'
    },
    extend: {},
  },
  plugins: [],
};

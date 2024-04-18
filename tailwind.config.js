/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';


export default {

  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      ...colors,
      'putih':'#FEFBF6',
      'hitam': '#1e1e1e',
      'coklatT': '#ECB159',
      'coklatG': '#B67352'
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';


export default {

  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      ...colors,
      'putih':'#F5F5F5',
      'hitam': '#101010',
      'merah': '#EC2031'
    },
    extend: {},
  },
  plugins: [],
};

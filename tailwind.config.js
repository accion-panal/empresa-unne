/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E85512',
          opacity: '#E85512D4',
          ligth: '#FFF7ED',
          300: '#FDBA74',
          400: '#fb923C',
        },
        secondary: {
          DEFAULT: '#FABA16',
          opacity: '#FABA16D4',
          ligth: '#FEF3C7',
          300: '#FCD34D',
          400: '#FACC15',
        },
        tertiary: {
          DEFAULT: '#353843',
          opacity: '#353843D4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};

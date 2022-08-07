/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#3834FF',
      },
      translate: {
        'minus-full': '-100%',
      },
    },
  },
  plugins: [],
};

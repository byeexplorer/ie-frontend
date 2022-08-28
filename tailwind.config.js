/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '[400]': `${400 / 50}rem`,
      },
      height: {
        '[279]': `${280 / 50}rem`,
      },
      colors: {
        blue: '#3834FF',
        dark: '#1d1e1f',
      },
      translate: {
        'minus-full': '-100%',
      },
      fontSize: {
        tiny: '.5rem',
      },
    },
  },
  plugins: [],
};

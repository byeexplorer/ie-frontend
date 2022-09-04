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
      keyframes: {
        'slide-in': {
          from: {
            right: '-60%',
          },
          to: {
            right: '0',
          },
        },
        'slide-out': {
          from: {
            right: '0',
          },
          to: {
            right: '-60%',
          },
        },
        'width-full': {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-in-out',
        'slide-out': 'slide-out 1s ease-in-out',
        'width-full': 'width-full 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

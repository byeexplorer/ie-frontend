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
        blue: '#3834ff',
        dark: '#1d1e1f',
        lightdark: '#181818',
      },
      translate: {
        'minus-full': '-100%',
      },
      fontSize: {
        tiny: '.5rem',
      },
      keyframes: {
        'width-full': {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      animation: {
        'width-full': 'width-full 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

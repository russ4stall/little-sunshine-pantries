/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        'satin-linen': {
          50: '#f9f7f3',
          100: '#f1ede3',
          200: '#e5decd', // default
          300: '#cfc1a2',
          400: '#baa37d',
          500: '#ac8e63',
          600: '#9f7c57',
          700: '#84654a',
          800: '#6c5340',
          900: '#584536',
          950: '#2f231b'
        },
        'mine-shaft': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#282828' // default
        },
        calypso: {
          50: '#e8ffff',
          100: '#c5fffe',
          200: '#92fffd',
          300: '#47fffc',
          400: '#00f8ff',
          500: '#00daff',
          600: '#00abd7',
          700: '#0087ac',
          800: '#006b8a', // default
          900: '#055874',
          950: '#003a51'
        },
        pizazz: {
          50: '#fffbec',
          100: '#fff7d3',
          200: '#ffeba5',
          300: '#ffda6d',
          400: '#ffbd32',
          500: '#ffa60a',
          600: '#fe8e00', // default
          700: '#cc6902',
          800: '#a1510b',
          900: '#82440c',
          950: '#462004'
        }

      }
    }
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};


/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Segoe_UI_Bold: ['Segoe_UI_BOLD'],
      Segoe_UI_Primary: ['Segoe_UI_PRIMARY'],
      Segoe_UI_Italic: ['Segoe_UI_ITALIC'],
      Segoe_UI_Italic_Bold: ['Segoe_UI_ITALIC_BOLD'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        brandColor: {
          blue: {
            DEFAULT: '#001F5D',
            dark: '#001F5D',
            light: '#00AEEF',
          },
          black: {
            DEFAULT: '#343434',
            dark: '#343434',
            light: '#707070',
          },
          white: {
            DEFAULT: '#FFFFFF',
            primary: '#FFFFFF',
          },
          green: {
            DEFAULT: '#025813',
            dark: '#025813',
            primary: '#025813',
          },
        },
      },
    },
  },
};

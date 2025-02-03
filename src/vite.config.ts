// const { withAnimations } = require('animated-tailwindcss');

//  @type {import('tailwindcss').Config} 
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      'node_modules/daisyui/dist/**/*.js',
      'node_modules/react-daisyui/dist/**/*.js',
      'node_modules/preline/dist/*.js',
    ],
    theme: {
      fontFamily: {
        serif: ['Spectral', 'Georgia', 'Times New Roman', 'Times', 'serif'],
        sans: ['roboto', 'sans-serif'],
        poppins: ['Poppins', 'serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        USAFPrimaryGreen: '#39B755',
        USAFPrimaryWhite: '#FFFFFF',
        USAFPrimaryBlack: '#000000',
        USAFPrimaryBlack_2: '#393939',
        USAFPrimaryBlack_3: '#111111',
        USAFPrimaryGrey: '#9E9E9E',
      },
      maxWidth: {
        xs: '32rem',
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
      },
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('daisyui'),
      require('preline/plugin'),
    ],
    daisyui: {
      themes: [
        {
          light: {
            primary: '#008753',
            secondary: '#CF916D',
            accent: '#07AA3D',
            neutral: '#25373F',
            'base-100': '#ffffff',
            info: '#3ABFF8',
            success: '#36D399',
            warning: '#FBBD23',
            error: '#F87272',
          },
        },
        {
          heroBlack: {
            primary: '#25373F',
            secondary: '#CF916D',
            accent: '#07AA3D',
            neutral: '#ffffff',
            'base-100': '#ffffff',
            info: '#3ABFF8',
            success: '#36D399',
            warning: '#FBBD23',
            error: '#F87272',
          },
        },
        {
          heroWhite: {
            primary: '#ffffff',
            secondary: '#CF916D',
            accent: '#07AA3D',
            neutral: '#25373F',
            'base-100': '#008753',
            info: '#3ABFF8',
            success: '#36D399',
            warning: '#FBBD23',
            error: '#F87272',
          },
        },
      ],
    },
  };
  
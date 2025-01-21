/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'default-shadow': '0 2px 10px 0 #195dc212',
       'custom-blue': '0 4px 10px 0 rgba(2, 87, 251, 0.2)'
      },
      transition: {
        transitionDuration: {
          DEFAULT: '300ms',
        },
        transitionTimingFunction: {
          DEFAULT: 'ease-in-out',
        },
        transitionProperty: {
          DEFAULT: 'all',
        },
      },
      borderRadius: {
        DEFAULT: '24px'
      }
    },
  },
  plugins: []
}

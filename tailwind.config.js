/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px'
    },
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        'dark-blue-main': 'hsl(217, 54%, 11%)',
        'dark-blue-card': 'hsl(216, 50%, 16%)',
        'dark-blue-line': 'hsl(216, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}


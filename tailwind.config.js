/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './themes/**/layouts/**/*.html',
    './themes/**/content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'game-primary': '#FF6B35',
        'game-secondary': '#004E89', 
        'game-accent': '#FFD23F'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
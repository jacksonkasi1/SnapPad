/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: ['./src/renderer/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}

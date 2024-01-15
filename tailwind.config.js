/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: ['./src/renderer/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#f0f0f0'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}

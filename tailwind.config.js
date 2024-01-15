/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
  content: [
    './src/renderer/**/*.{html,js,ts,jsx,tsx}',
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}'
  ],
  presets: [
    require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset'),
  ],
  plugins: [require('@tailwindcss/typography')]
}

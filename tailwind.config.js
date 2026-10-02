export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brand: '#b5122f', 'brand-dark': '#8a0d24', teal: { tis: '#9fd8d3' }, cream: '#fbf6f0' },
      fontFamily: { sans: ['Manrope', 'sans-serif'], display: ['Playfair Display', 'serif'] },
    },
  },
}

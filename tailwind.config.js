/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2E3A49',   /* inspired by logo */
          light: '#F4F6F8',
          gold: '#F5C542',
        },
      },
      boxShadow: {
        card: '0 10px 24px rgba(46,58,73,0.10)',
      },
    },
  },
  plugins: [],
}

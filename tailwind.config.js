/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#0a1024',
          900: '#0f172a',
          800: '#172554',
          700: '#1e3a8a',
          500: '#10b981',
        },
      },
    },
  },
  plugins: [],
}


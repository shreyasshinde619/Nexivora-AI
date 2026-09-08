/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a4bcfd',
          400: '#7a96fc',
          500: '#4f69f8',
          600: '#3846ed',
          700: '#2b33d9',
          800: '#262cb0',
          900: '#242a8b',
          950: '#151754',
        },
        academic: {
          teal: '#0ea5e9',
          emerald: '#10b981',
          purple: '#8b5cf6',
          amber: '#f59e0b',
          rose: '#f43f5e',
          slate: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

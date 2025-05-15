/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        orange: {
          50: '#FFF7ED',
          100: '#FFE4CC',
          200: '#FFD4B3',
          300: '#FFC299',
          400: '#FFB380',
          500: '#FF9B66',
          600: '#FF6600',
          700: '#CC5200',
          800: '#993D00',
          900: '#662900',
          950: '#331400',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};
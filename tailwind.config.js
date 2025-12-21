/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary lavender background
        lavender: {
          50: '#FDFCFE',
          100: '#F9F6FC',
          200: '#F3EDF9',
          300: '#E8DDF2',
          400: '#D4C4E3',
          500: '#B8A4CF',
        },
        // Warm sunrise orange accent
        sunrise: {
          300: '#FFBE85',
          400: '#FFAD5C',
          500: '#FF9A3E',
          600: '#E8882F',
          700: '#CC7520',
        },
        // Deep purple accent
        plum: {
          400: '#5A3A7E',
          500: '#4A2D6B',
          600: '#3A215C',
          700: '#2D1847',
          800: '#1F1232',
        },
        // Navy text
        navy: {
          800: '#1A1B2E',
          900: '#121426',
          950: '#0A0B14',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 40px 10px rgba(255, 154, 62, 0.3)' },
          '50%': { boxShadow: '0 0 60px 20px rgba(255, 154, 62, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}

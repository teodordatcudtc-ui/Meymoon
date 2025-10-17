/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf9f8',
          100: '#f5f2f0',
          200: '#e7ded9',
          300: '#d4c7c0',
          400: '#b8a69c',
          500: '#9c8578',
          600: '#906054',
          700: '#7a4f45',
          800: '#64413a',
          900: '#4e332f',
        },
        accent: {
          50: '#fdf6f5',
          100: '#fbe9e6',
          200: '#f6d1cc',
          300: '#efb3a8',
          400: '#e68a7a',
          500: '#906054',
          600: '#7a4f45',
          700: '#64413a',
          800: '#4e332f',
          900: '#382220',
        }
      },
      fontFamily: {
        'serif': ['var(--font-serif)', 'Playfair Display', 'serif'],
        'sans': ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'parallax': 'parallax 20s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        parallax: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

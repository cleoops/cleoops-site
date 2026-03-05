/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf6ee',
          100: '#faeacc',
          200: '#f4d49a',
          300: '#edb95e',
          400: '#e89e32',
          500: '#d4821a',
          600: '#b86514',
          700: '#8f4a11',
          800: '#753d14',
          900: '#623414',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

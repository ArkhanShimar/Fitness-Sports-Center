/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D4BC05',
        dark: '#000000',
        light: '#ffffff',
      },
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
        'koulen': ['Koulen', 'cursive'],
        sans: ['Unbounded', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
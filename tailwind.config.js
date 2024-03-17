/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#0b132b',
        'blue-darker': '#1c2541',
        'blue-medium': '#3a506b',
        'blue-light': '#5bc0be',
        'blue-lighter': '#6fffe9',
      },
    },
  },
  plugins: [],
}
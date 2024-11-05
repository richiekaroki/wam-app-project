/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a3bcb6', // Soft greens
        accent: '#c2a666', // Yellow buttons
        dark: '#363636', // Dark text
        light: '#f7f7f7', // Light backgrounds
      },
      fontFamily: {
        sans: ['YourFontFamily', 'sans-serif'],
      },
      // Add any other customizations here
    },
  },
  plugins: [],
}

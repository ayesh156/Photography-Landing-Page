/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0D0F11', // Example primary color
        'primary-white': '#898D92', // Example primary color
        // Add more colors here
      },
    },
  },
  plugins: [],
}
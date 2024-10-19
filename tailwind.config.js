/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',  // Customize your primary color
        secondary: '#F39C12', // Customize your secondary color
        accent: '#E74C3C',    // Accent color
      },
    },
  },
  plugins: [],
}

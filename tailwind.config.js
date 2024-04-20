/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Custom Font"', "sans-serif"],
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        DM: ["DM Sans", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}


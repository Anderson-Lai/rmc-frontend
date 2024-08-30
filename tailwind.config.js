/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark-green": "#2B6454",
        "bg-black": "#000000",
        "text-light-green": "#9BAB8A",
        "border-light-yellow": "#F5E3B1"
      },
      fontFamily: {
        "title-family": "Montserrat"
      },
      boxShadow: {
        "white": "0px 0px 10px 6px #FFFFFF",
        "small-white": "0px 0px 10px 2px #FFFFFF",
      }
    },
  },
  plugins: [],
}
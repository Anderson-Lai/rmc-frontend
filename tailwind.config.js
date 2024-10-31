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
        "border-light-yellow": "#F5E3B1",
        "text-secondary": "#636c73",
        "button-hover": "#F5E3B1"
      },
      fontFamily: {
        "title-family": "Montserrat"
      },
      boxShadow: {
        "medium-white": "0px 0px 10px 2px #FFFFFF",
        "small-white": "0px 0px 7px 1px #FFFFFF"
      }
    },
  },
  plugins: [],
}
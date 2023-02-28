/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js, jsx}",
  ],
  theme: {
    colors: {
      yellow: "#ffff00",
      blue_light: "#669be8",
      red_light: "#d86d71",
      box_col: "#f8f8f8",
      while: "#f7f7f7",
      color_border: "rgba(0, 0, 0, 0.125)",
    },
    extend: {
      space: {
        72: "7.2rem",
      },
      borderRadius: {},
    },
  },
  plugins: [],
  important: true,
}

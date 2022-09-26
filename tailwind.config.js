/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16ABF8",
        secondary: "#F4F4F4",
        danger: "#ED4C5C",
      },
      animation: {
        slides: "slide 1s ease 0s 1 normal forwards;",
      },
      keyframes: {
        slide: {
          "0%": {
            opacity: 0,
            transform: "translateX(-250px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
});

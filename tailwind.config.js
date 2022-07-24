/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2385c8",
        black2: "#333537",
      },
      fontFamily: {
        maven: ["Maven Pro", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      screens: {
        tablet: "921px",
      },
    },
  },
  plugins: [],
};

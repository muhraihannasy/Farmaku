/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{js}"],

  theme: {
    extend: {
      colors: {
        primary: "#2385c8",
        black2: "#333537",
        grey: "#606363",
        grey2: "#919494",
        pumpkin: "#F77E21",
        blueYoung: "#f4f9fc",
      },
      fontFamily: {
        maven: ["Maven Pro", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      screens: {
        tablet: "921px",
        phone1: "768px",
        phone: "523px",
      },
    },
  },
  plugins: [],
};

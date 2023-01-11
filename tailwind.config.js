const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)", ...fontFamily.sans],
      },
    },
    colors: {
      blue: "#62BCFA",
      pink: "#AD1FEA",
      orange: "#F49F85",
      light: "#F2F4FF",
      activeColor: "#4661E6",
    },
  },
  plugins: [],
};

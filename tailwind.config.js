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
      backgroundImage: {
        mobileProfile:
          "url('../public/assets/suggestions/mobile/background-header.png')",
        tabletProfile:
          "url('../public/assets/suggestions/tablet/background-header.png)",
        desktopProfile:
          "url('../public/assets/suggestions/desktop/background-header.png)",
      },
      gridTemplateColumns: {
        half: "1fr 2fr",
      },
      boxShadow: {
        box: "0px 10px 40px -7px rgba(55, 63, 104, 0.350492)",
      },
    },
    colors: {
      secondaryBlue: "#62BCFA",
      orange: "#F49F85",
      purple: "#ad1fea",
      primaryBlue: "#4661e6",
      primaryGray: "#373f68",
      secondaryGray: "#3a4374",
      accentGray: "#647196",
      primaryWhite: "#fff",
      secondaryWhite: "#f2f4ff",
      accentWhite: "#f7f8fd",
    },
  },
  plugins: [],
};

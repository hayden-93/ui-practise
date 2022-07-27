const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      t: "768px",
      d: "1024px",
      max: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0%, 100%)",
      neutral: colors.neutral,
      sky: colors.sky,
    },
    fontFamily: {
      display: ["Montserrat"],
      body: ["Fraunces", "Outfit"],
    },
    extend: {
      colors: {
        primary: {
          "dark-cyan": "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)",
          "nft-soft-blue": "hsl(215, 51%, 70%)",
          "nft-cyan": "hsl(178, 100%, 50%)",
        },
        neutral: {
          "dark-blue": "hsl(212, 21%, 14%)",
          "dark-grayish-blue": "hsl(228, 12%, 48%)",
          "nft-main-dark-blue": "hsl(217, 54%, 11%)",
          "nft-card-dark-blue": "hsl(216, 50%, 16%)",
          "nft-line-dark-blue": "hsl(215, 32%, 27%)",
        },
        "qrc-light-gray": "hsl(212, 45%, 89%)",
        "qrc-grayish-blue": "hsl(220, 15%, 55%)",
        "qrc-dark-blue": "hsl(218, 44%, 22%)",
      },
      screens: {
        mobile: "375px",
      },
    },
  },

  plugins: [],
};

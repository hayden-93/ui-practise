const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/layout/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      t: "640px",
      d: "1024px",
      max: "1280px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 90%, 0%)",
      neutral: colors.neutral,
      sky: colors.sky,
    },
    fontFamily: {
      display: ["Montserrat", "Big Shoulders Display"],
      body: ["Fraunces", "Outfit", "Red Hat Display", "Lexend Deca", "Inter"],
    },
    extend: {
      backgroundImage: {
        "order-summary-pattern-mobile":
          "url(/assets/img/projects/order-summary-card/pattern-background-mobile.svg)",
        "order-summary-pattern-desktop":
          "url(/assets/img/projects/order-summary-card/pattern-background-desktop.svg)",
      },
      colors: {
        primary: {
          "dark-cyan": "hsl(158, 36%, 37%)",
          cream: "hsl(30, 38%, 92%)",
          "nft-soft-blue": "hsl(215, 51%, 70%)",
          "nft-cyan": "hsl(178, 100%, 50%)",
          "order-pale-blue": "hsl(225, 100%, 94%)",
          "order-bright-blue": "hsl(245, 75%, 52%)",
          "3column-orange": "hsl(31, 77%, 52%)",
          "3column-cyan": "hsl(184, 100%, 22%)",
          "3column-dark-cyan": "hsl(179, 100%, 13%)",
          "stats-dark-blue": "hsl(233, 47%, 7%)",
          "stats-desaturated-blue": "hsl(244, 38%, 16%)",
          "stats-violet": "hsl(277, 64%, 61%)",
        },
        neutral: {
          "dark-blue": "hsl(212, 21%, 14%)",
          "dark-grayish-blue": "hsl(228, 12%, 48%)",
          "nft-main-dark-blue": "hsl(217, 54%, 11%)",
          "nft-card-dark-blue": "hsl(216, 50%, 16%)",
          "nft-line-dark-blue": "hsl(215, 32%, 27%)",
          "order-very-pale-blue": "hsl(225, 100%, 98%)",
          "order-desaturated-blue": "hsl(224, 23%, 55%)",
          "order-very-pale-blue": "hsl(223, 47%, 23%)",
          "3column-transparent-white": "hsla(0, 0%, 100%, 0.75)",
          "3column-very-light-gray": "hsl(0, 0%, 95%)",
          "stats-violet": "hsla(0, 0%, 100%, 0.75)",
          "stats-violet": "hsla(0, 0%, 100%, 0.6)",
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

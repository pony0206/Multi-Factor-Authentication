const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#9BCDB0",
          light: "#C0E0CD",
          dark: "#99CC99",
        },
        green: "#8CC63F",
        gray: {
          dark: "#534741",
        },
        yellow: {
          DEFAULT: "#FFFF00",
          light: "#FEF6C5",
          dark: "#FF931E",
        },
        brown: "#603813",
      },
      scale: {
        110: "110%",
        160: "160%",
      },
      dropShadow: {
        "3xl": "4px 4px 2px rgba(0, 0, 0, 0.7)",
        "4xl": "4px 4px 1px rgba(0, 0, 0, 1)",
        "5xl": [
          "20px 35px 35px rgba(0, 0, 0, 0.65)",
          "20px 45px 65px rgba(0, 0, 0, 0.45)",
        ],
      },
      skew: {
        40: "40deg",
      },
      width: {
        180: "58rem",
      },
    },
  },

  plugins: [],
};

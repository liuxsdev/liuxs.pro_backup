/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    fontFamily: {
      ubuntu: ["ubuntu", ...defaultTheme.fontFamily.sans],
      din: ["din", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};

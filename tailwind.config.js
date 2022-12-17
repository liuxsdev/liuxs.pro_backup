/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    fontFamily: {
      ubuntu: ["ubuntu", ...defaultTheme.fontFamily.sans],
      din: ["din", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      sans: ["din", defaultTheme.fontFamily.sans],
      mono: ["CascadiaMono", ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

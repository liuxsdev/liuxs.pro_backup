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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              border: "1px solid #ccc",
              "border-radius": "0.375rem",
              padding: "0.25rem",
            },
            blockquote: {
              "font-style": "normal",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "konastone-primary": "#feb403",
        "konastone-secondary": "#0278fe",
        "konastone-white": "#EEEEEE",
        "dark-grey": "#101828",
        "dark-grey-light": "#162238",
      },
    },
  },
  plugins: [],
};

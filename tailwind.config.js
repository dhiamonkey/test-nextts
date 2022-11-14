/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "idn-primary-red": "#ED2227",
      "idn-secondary-red": "#DF1217",
      "idn-tertiary-red": "#FBD2D4",
      "idn-white": "#FFFFFF",
      "idn-slate": "#E2E2E2",
      "idn-grey": "#797D7F",
      "idn-silver": "#ADB1B4",
    },
    fontFamily: {
      body: ["Lato"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

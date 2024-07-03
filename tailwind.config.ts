/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      gold: "#D5B26A",
      lightGold: "#E8C275",
      darkBlue: "#041326",
      blue: "#061B36",
      lightBlue: "#2C64DD",
      gray: {
        100: "#F6F8FB",
        200: "#F2F2F2",
        300: "#C4C4C4",
      },
      white: "#FFFFFF",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}", ],
  theme: {
    extend: {
      colors: {
        offblack: "#1a1a1a",
        offwhite: "#BCBCBC",
        offblue: "#0E80BF",
        offpurple: "#6B40E3",
        offorange: "#F93B1D",
        offgray: "#f9f9f9",
        offlightgray: "#C8C8C8",
        hint:"#2E2E2E",
      },
    },
  },
  plugins: [],
}
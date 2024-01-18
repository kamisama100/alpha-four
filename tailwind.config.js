/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#293356",
        secondary: "#1254FF",
        dark: "#010021",
      },
      backgroundColor: {
        primary: "#293356",
        secondary: "#1254FF",
        body: "#F6F6F6",
      },
      borderWidth: {
        1: 1,
      },
      borderColor: {
        light: "#D2D9E7",
      },
      boxShadow: {
        card: "0px 2px 6px -4px rgba(0, 11, 67, 0.10)",
        button: "0px 12px 14px rgba(0, 14, 87, 0.12)",
      },
    },
  },
  plugins: [],
}

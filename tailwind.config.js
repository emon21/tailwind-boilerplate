/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
        center: true,
        padding: "0rem",
        screens: {
            sm: "600px",
            md: "728px",
            lg: "920px",
            xl: "1024px",
            "2xl": "1320px",
        },
    },
  },
  plugins: [],
}

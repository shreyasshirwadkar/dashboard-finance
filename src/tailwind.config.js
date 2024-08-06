module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primarySidebar: "#2a2730",
        iconSidebar: "#3b3843",
        secondarySidebar: "#cec9d7",
        primary: "#16151b",
        selectedSidebar:"#3c3944"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      gray: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      blue: colors.blue,
      indigo: {
        50: "#F0F5FF",
        100: "#E5EDFF",
        200: "#CDDBFE",
        300: "#B4C6FC",
        400: "#8DA2FB",
        500: "#6875F5",
        600: "#5850EC",
        700: "#5145CD",
        800: "#42389D",
        900: "#362F78",
      },
    },
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      extend: {
        AnimationEffect: ["last"],
        ringWidth: ["focus-visible"],
        ringColor: ["focus-visible"],
        ringOffsetWidth: ["focus-visible"],
        ringOffsetColor: ["focus-visible"],
      },
    },
    plugins: [],
  },
};

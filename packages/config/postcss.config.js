const { join } = require("path");

module.exports = {
  //plugins: [require("./tailwind.config"), require("autoprefixer")],
  // plugins: {
  //   tailwindcss: { config: require("./tailwind.config") },
  //   autoprefixer: {},
  // },

  plugins: {
    tailwindcss: {
      config: join(__dirname, "tailwind.config.js"),
    },
    autoprefixer: {},
  },
};

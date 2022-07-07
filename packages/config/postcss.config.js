//TODO: postcss version mismatch with latest tailwindcss

module.exports = {
  //  plugins: [require("./tailwind.config"), require("autoprefixer")],
  plugins: {
    tailwindcss: { config: require("./tailwind.config") },
    autoprefixer: {},
  },
};

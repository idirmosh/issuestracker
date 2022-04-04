const withTM = require("next-transpile-modules")(["ui", "shared"]);

const config = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/api/graphql",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = withTM(config);

const withTM = require("next-transpile-modules")(["ui","api","shared"]);

const config = {
  images: {
    domains: ["pbs.twimg.com","s.gravatar.com"],
  },
  reactStrictMode: true,
  strictMode:true
}

module.exports = withTM(config);

const withTM = require("next-transpile-modules")(["ui", "api", "shared"]);

const config = {
  images: {
    domains: [
      "pbs.twimg.com",
      "s.gravatar.com",
      "avatars.githubusercontent.com",
      "gql-issuetracker.s3.us-east-2.amazonaws.com",
    ],
  },
  reactStrictMode: true,
  strictMode: true,
};

module.exports = withTM(config);

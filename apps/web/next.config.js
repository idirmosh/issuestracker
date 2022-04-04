const withTM = require("next-transpile-modules")(["ui","api","shared"]);
const config = {
  reactStrictMode: true,

  // webpack(config) {
  //   const rules = config.module.rules
  //     .find((rule) => typeof rule.oneOf === 'object')
  //     .oneOf.filter((rule) => Array.isArray(rule.use));

  //   rules.forEach((rule) => {
  
  //     rule.use.forEach((moduleLoader) => {
  //       console.log(moduleLoader)
  //       if (moduleLoader.loader.includes('react-refresh-utils'))
  //         moduleLoader.options.sourceMap = false;
  //     });
  //   });

  //   return config;
  // },
  images: {
    domains: ["pbs.twimg.com","s.gravatar.com"],
  },

}
module.exports = withTM(config);

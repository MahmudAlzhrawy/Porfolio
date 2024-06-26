const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        baseUrl: "./src",
        aliases: {
          "@": "./" // هذا يعني أن الرمز @ يشير إلى مجلد src
        }
      }
    }
  ]
};

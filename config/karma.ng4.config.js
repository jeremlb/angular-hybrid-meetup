const karmaConf = require('./karma.config');

module.exports = function (config) {
  karmaConf(config);
  config.files = [
    { pattern: './karma-test-ng4-shim.js', watched: false },
  ];
  config.preprocessors = {
    './karma-test-ng4-shim.js': ['webpack', 'sourcemap']
  };
};

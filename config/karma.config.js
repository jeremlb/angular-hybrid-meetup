const webpackConfig = require('./webpack.dev');

// Workaround see https://github.com/webpack-contrib/karma-webpack/issues/24
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);
webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

module.exports = function (config) {
  'use strict';

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-html-reporter'),
      require('karma-webpack'),
      require('karma-jasmine-html-reporter'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter')
    ],
    files: [
      { pattern: './karma-test-shim.js', watched: false },
    ],
    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    reporters: ['spec'/* , 'progress', 'kjhtml'*/],
    specReporter: {
      suppressSkipped: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    captureTimeout: 5000,
    reportSlowerThan: 500,
    singleRun: true,
    captureConsole: true
  });
};

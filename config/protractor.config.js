'use strict';

const helpers = require('./helpers');

exports.config = {
  allScriptsTimeout: 60000,
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print() { },
  },
  specs: [
    helpers.root('e2e/**/*.scenario.js'),
  ],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
  },
  rootElement: 'body',
  onPrepare() {
    initTestServer();
    initReporters();
  },
};

function initTestServer() {
  var finalhandler = require('finalhandler')
  var http = require('http')
  var serveStatic = require('serve-static')
  
  var serve = serveStatic(__dirname + '/../dist', {'index': ['index.html']})
  var server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res))
  })
  
  // Listen
  server.listen(3000);
}

function initReporters() {
  const SpecReporter = require('jasmine-spec-reporter').SpecReporter; // eslint-disable-line
  jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
}

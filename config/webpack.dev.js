const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
});

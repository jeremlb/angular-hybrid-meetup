const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = require('./webpack.common');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production'; // eslint-disable-line

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV) // eslint-disable-line
      }
    }),
  ],
  output: {
    path: helpers.root('dist'),
    filename: '[name]-[chunkhash].min.js',
    chunkFilename: '[id].[chunkhash].chunk.js',
  },
});

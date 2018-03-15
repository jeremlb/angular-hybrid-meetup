const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const helpers = require('./helpers');

const extractCSS = new ExtractTextPlugin('[name].css');
const extractLESS = new ExtractTextPlugin('[name].css');

module.exports = {
  context: helpers.root('src/'),
  entry: {
    main: './main.js',
    vendor: './vendor.js',
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor']
    }),
    new HtmlWebpackPlugin({
      filename: helpers.root('./dist/index.html'),
      template: helpers.root('./src/index.html'),
    }),
    new CopyWebpackPlugin([{
      from: helpers.root('./src/assets'),
      to: helpers.root('./dist/assets'),
    }]),
    extractCSS,
    extractLESS,
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          { loader: 'url-loader?limit=20000' },
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /\.spec\.js$/
        ],
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        issuer: /\.js$/,
        use: extractLESS.extract([
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ])
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.html', '.less'],
  },
};

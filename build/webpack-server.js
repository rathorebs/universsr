const isDev = require('isdev');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const commonConfig = require('./webpack-common');
const pkg = require('../package');
const syspath = require('../config/syspath');

const serverConfig = {
  name: 'server',
  target: 'node',
  context: commonConfig.context,
  devtool: commonConfig.devtool,
  node: {
    __filename: false,
    __dirname: false
  },
  externals: [
    nodeExternals({
      whitelist: [
        'react-universal-component',
        'require-universal-module',
        'webpack-flush-chunks'
      ]
    })
  ],
  entry: [commonConfig.polyfill, './server/index.js'],
  output: {
    path: `${syspath.src}/server`,
    libraryTarget: 'commonjs2',
    filename: 'index-built.js'
  },
  resolve: commonConfig.resolve,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              importLoaders: 1,
              modules: true, // enable css modules
              localIdentName: pkg.cssModules.scopedName
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      ...commonConfig.rules
    ]
  },
  plugins: [
    ...commonConfig.plugins,
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  ]
};

module.exports = serverConfig;

/* eslint-disable no-undef */
var path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const babelConfig = require('./babel.config');

module.exports = {
  entry: {
    app: ['./app/index.ts'],
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    libraryTarget: 'umd2',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'lib', 'app'],
  },
  module: {
    rules: [
      {
        test: /\.(x|ht)ml$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        options: babelConfig,
      },
    ],
  },
  stats: {
    colors: true,
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  devServer: {
    hot: true,
  },
  devtool: 'source-map',
  mode: 'development',
  // mode: 'production',
};

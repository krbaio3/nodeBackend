const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
const NoEmitOnErrorsPlugin = require('webpack').NoEmitOnErrorsPlugin;
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const merge = require('webpack-merge');
const join = require('path').join;

const webpackBase = require('./webpack.base.conf');

module.exports = merge(webpackBase, {
  mode: 'development',
  // watch: true,
  // watchOptions: {
  //   ignored: /node_modules/
  // },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ],
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    lazy: true,
    https: true,
    hot: true,

  }
})
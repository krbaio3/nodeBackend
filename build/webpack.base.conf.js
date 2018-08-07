const resolve = require('path').resolve;
const nodeExternals = require('webpack-node-externals');
console.log('Entra');

// var path = require('path');
module.exports = {
  entry: './src/index.ts',
  // cheap-modul  e-eval-source-map is faster for development
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: '#cheap-module-eval-source-map',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: '/node_modules/'
    }]  
  },
  target: 'node',
  externals: [nodeExternals()],
}
const CompressionWP = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const merge = require('webpack-merge');

const webpackBase = require('./webpack.base.conf');

module.exports = merge(webpackBase, {
  mode: 'production',
  output: {
    library: 'backEnd',
    libraryTarget: 'umd',
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new CompressionWP({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    }),
    new BundleAnalyzerPlugin()
  ],
  devtool: '#source-map',
})
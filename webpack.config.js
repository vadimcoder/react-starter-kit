var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Clean = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var SRC_PATH = 'src';
var SRC_ABSOLUTE_PATH = path.join(__dirname, SRC_PATH);
var INDEX_HTML_TEMPLATE_ABSOLUTE_PATH = path.join(SRC_ABSOLUTE_PATH, 'index.html');

var DIST_PATH = 'dist';
var DIST_ABSOLUTE_PATH = path.join(__dirname, DIST_PATH);

var APPLICATION_BUNDLE_FILENAME = 'app-[hash].js';
var CSS_BUNDLE_FILENAME = 'app-[hash].css';

var plugins = [
  new ExtractTextPlugin(CSS_BUNDLE_FILENAME),
  new Clean([DIST_PATH]),
  new HtmlWebpackPlugin({
    template: INDEX_HTML_TEMPLATE_ABSOLUTE_PATH,
    inject: 'body'
  })
];

var isDist = process.argv[2] === '--dist';

if (isDist) {
  var webpack = require("webpack");
  
  var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      comments: false
  });

  plugins.push(uglifyJsPlugin);
}

module.exports = {
    context: SRC_ABSOLUTE_PATH,
    entry: "./entry",
    output: {
        path: DIST_ABSOLUTE_PATH,
        filename: APPLICATION_BUNDLE_FILENAME
    },
    module: {
      // loaders are loaded from bottom to top
      loaders: [{
          loader: 'babel',
          test: /\.js|jsx$/,
          include: SRC_ABSOLUTE_PATH, // other paths are ignored
          query: {
              presets: ['es2015', 'react']
          }
         },{
          // ESLint should be before any transpiling tools.
          // Or use preLoaders section to check source files, not modified by other loaders (like babel-loader)
          loader: 'eslint',
          test: /\.js|jsx$/,
          include: SRC_ABSOLUTE_PATH
        },{
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
          test: /\.scss$/,
          include: SRC_ABSOLUTE_PATH
        }],
    },
    plugins: plugins,
    eslint: {
      // treat errors like warnings to not fail the build in development
      emitWarning: true
    }
}

// in case of NODE API (http://webpack.github.io/docs/node.js-api.html):

// webpack({
  
// }, function(err, stats) {
// }).watch({ // watch options:
//   debug: true,
//     aggregateTimeout: 300, // wait so long for more changes
//     poll: true // use polling instead of native watchers
//     // pass a number to set the polling interval

// }, function(err, stats) {
//     console.log(stats.toString({colors: true}));
// });
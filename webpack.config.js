var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var SRC_PATH = path.join(__dirname, 'src');
var APPLICATION_BUNDLE_FILENAME = 'app.js';
var CSS_BUNDLE_FILENAME = 'app.css';

var plugins = [
  new ExtractTextPlugin(CSS_BUNDLE_FILENAME)
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
    context: SRC_PATH,
    entry: "./entry",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: APPLICATION_BUNDLE_FILENAME
    },
    module: {
      // loaders are loaded from bottom to top
      loaders: [{
          loader: 'babel',
          test: /\.js|jsx$/,
          include: SRC_PATH, // other paths are ignored
          query: {
              presets: ['es2015', 'react']
          }
         },{
          // ESLint should be before any transpiling tools.
          // Or use preLoaders section to check source files, not modified by other loaders (like babel-loader)
          loader: 'eslint',
          test: /\.js|jsx$/,
          include: SRC_PATH
        },{
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
          test: /\.scss$/,
          include: SRC_PATH
        }],
    },
    plugins: plugins
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
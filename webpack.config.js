

// TODO add eslint and diplicate case rule

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

webpack({
    context: path.join(__dirname, '/src'),
    entry: "./entry",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "app.js"
    },
    module: {
      loaders: [{
          loader: 'babel',
          test: /\.js|jsx$/,
          exclude: /(node_modules|bower_components)/,
          query: {
              presets: ['es2015', 'react']
          }
         },{
          loader: 'eslint',
          test: /\.js|jsx$/
        },{
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
          test: /\.scss$/
        }],
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true
        })
    ]
}, function(err, stats) {
    // ...
}).watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    console.log(stats.toString({colors: true}));
});
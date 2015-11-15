

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
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          query: {
              presets: ['es2015', 'react']
          }
         },{
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass')
          // loader: 'style!css!sass'
        }],
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
}, function(err, stats) {
    // ...
}).watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    console.log(stats);
});
var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SRC_PATH = path.join(__dirname, 'src');

module.exports = {
    context: SRC_PATH,
    entry: "./entry",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "app.js"
    },
    module: {
      loaders: [{
          loader: 'babel',
          test: /\.js|jsx$/,
          include: SRC_PATH,
          query: {
              presets: ['es2015', 'react']
          }
         },{
          loader: 'eslint',
          test: /\.js|jsx$/,
          include: SRC_PATH
        },{
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
          test: /\.scss$/,
          include: SRC_PATH
        }],
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true
        })
    ]
}
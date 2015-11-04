var webpack = require("webpack");

console.log(__dirname);
console.log(process.cwd());

webpack({
    context: __dirname + "/src",
    entry: "./entry",
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }
      ]
    }
}, function(err, stats) {
    // ...
}).watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    // ...
});
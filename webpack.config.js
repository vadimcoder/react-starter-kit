var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_PATH = 'src';
var SRC_ABSOLUTE_PATH = path.join(__dirname, SRC_PATH);
var INDEX_HTML_TEMPLATE_ABSOLUTE_PATH = path.join(SRC_ABSOLUTE_PATH, 'index.html');

var DIST_PATH = 'dist';
var DIST_ABSOLUTE_PATH = path.join(__dirname, DIST_PATH);

var APPLICATION_BUNDLE_FILENAME = 'app-[hash].js';
var CSS_BUNDLE_FILENAME = 'app-[hash].css';

var plugins = [
    new ExtractTextPlugin({
        filename: CSS_BUNDLE_FILENAME,
        disable: false,
        allChunks: true
    }),
    new Clean([DIST_PATH]),
    new HtmlWebpackPlugin({
        template: INDEX_HTML_TEMPLATE_ABSOLUTE_PATH,
        inject: 'body'
    })
];

module.exports = function (env) {
    if (env && env.dist) {
        // https://webpack.js.org/guides/production-build/
        var webpack = require('webpack');

        plugins.push(new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: true,
            comments: false
        }));

        plugins.push(new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }));
    }

    return {
        context: SRC_ABSOLUTE_PATH,
        entry: './entry',
        output: {
            path: DIST_ABSOLUTE_PATH,
            filename: APPLICATION_BUNDLE_FILENAME
        },
        module: {
            // loaders are loaded from bottom to top
            rules: [{
                test: /\.js$/,
                include: SRC_ABSOLUTE_PATH, // other paths are ignored
                use: [{
                    loader: 'babel-loader'
                }, {
                    // ESLint should be before any transpiling tools.
                    // Or use preLoaders section to check source files, not modified by other loaders (like babel-loader)
                    loader: 'eslint-loader',
                    options: {
                        // treat errors like warnings to not fail the build in development iframe mode
                        // (http://localhost:8080/webpack-dev-server/)
                        emitWarning: true
                    }
                }]
            }, {
                test: /\.scss$/,
                include: SRC_ABSOLUTE_PATH, // other paths are ignored
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            }, {
                test: /\.(jpe?g|png|gif|svg)$/,
                include: SRC_ABSOLUTE_PATH, // other paths are ignored
                use: 'file-loader'
            }]
        },
        plugins: plugins,

        // specific settings for webpack-dev-server, see https://webpack.js.org/configuration/dev-server/
        devServer: {
            // https://github.com/webpack/webpack-dev-server/issues/143
            // https://github.com/brikis98/docker-osx-dev
            // watchOptions: {
            //   poll: true,
            // },
            contentBase: DIST_PATH,
            host: '0.0.0.0',
            // proxy requests to the backend
            proxy: {
                '*': 'http://localhost'
            }
        }
    }
};
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = 'src';
const SRC_ABSOLUTE_PATH = path.join(__dirname, SRC_PATH);
const INDEX_HTML_TEMPLATE_ABSOLUTE_PATH = path.join(SRC_ABSOLUTE_PATH, 'index.html');

const DIST_PATH = 'dist';
const DIST_ABSOLUTE_PATH = path.join(__dirname, DIST_PATH);

const APPLICATION_BUNDLE_FILENAME = 'app-[hash].js';
const CSS_BUNDLE_FILENAME = 'app-[hash].css';

const plugins = [
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

module.exports = (env) => {
  if (env && env.dist) {
    // https://webpack.js.org/guides/production-build/
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
          use: 'css-loader?minimize!sass-loader'
        })
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        include: SRC_ABSOLUTE_PATH, // other paths are ignored
        use: 'file-loader'
      }]
    },
    plugins,

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
      // TODO: this setting doesn't work with "historyApiFallback: true"
      // proxy: {
      //     '*': 'http://localhost'
      // },

      // this setting is needed to support react-router
      // TODO: this setting doesn't work with "proxy"
      historyApiFallback: true
    }
  };
};

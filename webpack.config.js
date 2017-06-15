const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function addVendorSplitting(plugins) {
  return [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return module.context && module.context.indexOf('node_modules') >= 0;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true
    }),
    ...plugins,
    new ScriptExtHtmlWebpackPlugin({
      inline: 'manifest'
    })
  ];
}

function addProductionPlugins(plugins) {
  // https://webpack.js.org/guides/production-build/

  return [
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: true,
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ];
}

module.exports = (env) => {
  const SRC_PATH = 'src';
  const SRC_ABSOLUTE_PATH = path.join(__dirname, SRC_PATH);
  const INDEX_HTML_TEMPLATE_ABSOLUTE_PATH = path.join(SRC_ABSOLUTE_PATH, 'index.html');

  const DIST_PATH = 'dist';
  const DIST_ABSOLUTE_PATH = path.join(__dirname, DIST_PATH);

  // from documentation: Don’t use [chunkhash] in development since this will increase compilation time
  // https://webpack.js.org/guides/caching/
  const FILE_PATTERN_DEVELOPMENT = '[name]';
  const FILE_PATTERN_PRODUCTION = '[name]-[chunkhash]';

  let applicationBundleFilename = `${FILE_PATTERN_DEVELOPMENT}.js`;
  let cssBundleFilename = `${FILE_PATTERN_DEVELOPMENT}.css`;

  const IS_PRODUCTION = env && env.production;
  const IS_ANALYZE = env && env.analyze;

  if (IS_PRODUCTION) {
    applicationBundleFilename = `${FILE_PATTERN_PRODUCTION}.js`;
    cssBundleFilename = `${FILE_PATTERN_PRODUCTION}.css`;
  }

  let plugins = [
    new ExtractTextPlugin({
      filename: cssBundleFilename,
      disable: false,
      allChunks: true
    }),
    new Clean([DIST_PATH]),
    new HtmlWebpackPlugin({
      template: INDEX_HTML_TEMPLATE_ABSOLUTE_PATH
    })
  ];

  if (IS_ANALYZE) {
    plugins = [
      new BundleAnalyzerPlugin(),
      ...plugins
    ];
  }

  if (IS_PRODUCTION) {
    // don't use it in development to save time on recompile
    plugins = addVendorSplitting(plugins);
    plugins = addProductionPlugins(plugins);
  }

  return {
    context: SRC_ABSOLUTE_PATH,
    entry: './entry',
    output: {
      path: DIST_ABSOLUTE_PATH,
      filename: applicationBundleFilename
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
          use: `css-loader${IS_PRODUCTION ? '?minimize' : ''}!sass-loader`
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
      // TODO: this setting doesn't work with 'historyApiFallback: true'
      // proxy: {
      //     '*': 'http://localhost'
      // },

      // this setting is needed to support react-router
      // TODO: this setting doesn't work with 'proxy'
      historyApiFallback: true
    }
  };
};

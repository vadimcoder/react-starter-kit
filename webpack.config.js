const webpack = require('webpack');
const {join} = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BIN_FILE_TYPES = require('./bin-file-types');

function getVendorSplittingPlugins(defaultPlugins) {
  // https://webpack.js.org/guides/caching/

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
    ...defaultPlugins,
    new ScriptExtHtmlWebpackPlugin({
      inline: 'manifest'
    })
  ];
}

function getProductionPlugins(defaultPlugins, isAnalyze) {
  // don't use it in development to save time on recompile
  // https://webpack.js.org/guides/production-build/

  let plugins = [
    ...getVendorSplittingPlugins(defaultPlugins),
    // looks buggy, doesn't update [chunkhash].
    // TODO: uncomment when migrate to webpack 3
    // this https://github.com/webpack/webpack/issues/5184 is supposed to fix the problem. But it looks it doesn't.
    // // https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b:
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: true,
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ];

  if (isAnalyze) {
    plugins = [
      ...plugins,
      new BundleAnalyzerPlugin()
    ];
  }

  return plugins;
}

function getDevelopmentPlugins(defaultPlugins) {
  return defaultPlugins;
}

function getPlugins(defaultPlugins, isProduction, isAnalyze) {
  return isProduction ?
    getProductionPlugins(defaultPlugins, isAnalyze) :
    getDevelopmentPlugins(defaultPlugins);
}

module.exports = (env) => {
  const SRC_PATH = 'src';
  const SRC_ABSOLUTE_PATH = join(__dirname, SRC_PATH);
  const INDEX_HTML_TEMPLATE_ABSOLUTE_PATH = join(SRC_ABSOLUTE_PATH, 'index.html');

  const DIST_ROOT = __dirname;
  const DIST_PATH = 'dist';
  const DIST_ABSOLUTE_PATH = join(DIST_ROOT, DIST_PATH);

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

  const DEFAULT_PLUGINS = [
    new ExtractTextPlugin({
      filename: cssBundleFilename,
      disable: false,
      allChunks: true
    }),
    new Clean([DIST_PATH], {
      root: DIST_ROOT
    }),
    new HtmlWebpackPlugin({
      template: INDEX_HTML_TEMPLATE_ABSOLUTE_PATH
    })
  ];

  const CSS_MODULES_CLASS_NAME_TEMPLATE = '[local]-[hash:base64:5]';
  const CSS_MODULES_CONFIG = `modules&importLoaders=1&localIdentName=${CSS_MODULES_CLASS_NAME_TEMPLATE}`;
  const plugins = getPlugins(DEFAULT_PLUGINS, IS_PRODUCTION, IS_ANALYZE);

  return {
    context: SRC_ABSOLUTE_PATH,
    entry: './entry',
    output: {
      path: DIST_ABSOLUTE_PATH,
      publicPath: '/', // uncomment this to load the bundle from site root (useful with react-router)
      filename: applicationBundleFilename
    },
    resolve: {
      modules: [join(__dirname, 'src'), 'node_modules']
    },
    module: {
      // loaders are loaded from bottom to top
      rules: [{
        test: /\.js$/,
        include: SRC_ABSOLUTE_PATH, // other paths are ignored
        use: [{
          loader: 'babel-loader',
          query: {
            plugins: [[
              // this plugin is to be able to write styles in React components like styleName='button'
              // instead of className={styles.button}. The first variant is more convenient for markupers.
              'react-css-modules', {
                context: SRC_ABSOLUTE_PATH,
                generateScopedName: CSS_MODULES_CLASS_NAME_TEMPLATE
              }
            ]]
          }
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
        test: /\.css$/,
        include: SRC_ABSOLUTE_PATH, // other paths are ignored
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: `css-loader?${IS_PRODUCTION ? 'minimize&' : ''}${CSS_MODULES_CONFIG}`
        })
      }, {
        test: new RegExp(`\\.(${BIN_FILE_TYPES})$`),
        include: SRC_ABSOLUTE_PATH, // other paths are ignored
        use: 'file-loader'
      }]
    },
    plugins,

    // specific settings for webpack-dev-server, see https://webpack.js.org/configuration/dev-server/
    devServer: {
      clientLogLevel: 'error',

      // https://github.com/webpack/webpack-dev-server/issues/143
      // https://github.com/brikis98/docker-osx-dev
      // watchOptions: {
      //   poll: true,
      // },
      contentBase: DIST_PATH,

      host: '0.0.0.0',
      // disableHostCheck: true,

      // proxy requests to the backend
      // TODO: this setting doesn't work with 'historyApiFallback: true'
      // proxy: {
      //     '*': 'http://localhost'
      // },

      // this setting is needed to support react-router
      // TODO: this setting doesn't work with 'proxy' *
      historyApiFallback: true
    }
  };
};

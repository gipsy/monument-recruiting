const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const CompressionPlugin = require("compression-webpack-plugin");

const plugins = ({ isProduction, sourcePath, buildPath }) => {
  let pluginArray = [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
      filename: "vendor-[hash].js"
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, "index.html"),
      path: buildPath,
      filename: "index.html"
    }),
    new ExtractTextPlugin({ filename: 'style-[contenthash:8].css', disable: false, allChunks: true }),
    new webpack.LoaderOptionsPlugin({
      options: {
        cssLoader: {
          module: true,
          modules: true,
          allowMultiple: true,
          sourceMap: !isProduction,
          importLoaders: 1,
          localIdentName: "[name]--[local]--[hash:base64:8]"
        },
        sassLoader: {
          outputStyle: "expanded",
          sourceMap: !isProduction,
        },
        resolveUrlLoader: {
          keepQuery: true,
          absolute: true
        },
        postcss: [
          // #TODO assure it works on IE
          require("postcss-import"),
          require("postcss-cssnext"),
          // autoprefixer({
          //   browsers: ["last 3 version", "ie >= 10"]
          // })
        ],
        context: sourcePath
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new DashboardPlugin()
  ];
  if (isProduction) {
    pluginArray.concat([
    //  new webpack.NoEmitOnErrorsPlugin(),
    //   new UglifyJSPlugin({
    //     compress: {
    //       warnings: false,
    //       sequences: true,
    //       dead_code: true,
    //       conditionals: true,
    //       comparisons: true,
    //       booleans: true,
    //       unused: true,
    //       loops: true,
    //       drop_debugger: true,
    //       unsafe: true,
    //       negate_iife: true
    //     },
    //     output: {
    //       comments: (node, comment) => {
    //         const { value: text, type } = comment;
    //         if (type === "comment2") {
    //           return /@copyright/i.test(text);
    //         }
    //       }
    //     }
    //   }),
    //   new CompressionPlugin({
    //     asset: "[path].gz[query]",
    //     algorithm: "gzip",
    //     test: /\.js$|\.css$|\.html$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    //   })
    ])
  }
  return pluginArray;
};

module.exports = plugins;

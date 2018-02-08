const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR = `${__dirname}/public/assets/`
const pathsToClean = [ `${DIST_DIR}css`, `${DIST_DIR}js`, ]
const cleanOptions = { exclude:  [] }

let plugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }),
  // new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" }),
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
]

switch (process.env.NODE_ENV) {
  case "development":
    plugins = plugins.concat([
      new ExtractTextPlugin({ filename: "css/[name].css" }),
    ])
    break
  case "production":
    plugins = plugins.concat([
      new ExtractTextPlugin({ filename: "css/[name].css" }),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    ])
    break
  case "hot":
    plugins = plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
    ])
    break
  default: break
}

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/js/vendor/index.js', './src/js/main/index.js', './src/js/app/index.js', './src/js/app-hoge/main.js', './src/js/app-weather/main.js', './src/js/app-sketching/todos/index.js']
  },
  output: { path: `${DIST_DIR}`, filename: 'js/[name].js', publicPath: "/assets/" },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: process.env.NODE_ENV === 'hot'
          ? [
            { loader: 'style-loader', options: { sourceMap: true } },
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
          : ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } }
            ]
          })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: process.env.NODE_ENV === 'hot'
          ? [
            { loader: 'style-loader', options: { sourceMap: true } },
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } }
          ]
          : ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'postcss-loader', options: { sourceMap: true } }
            ]
          })
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${__dirname}/public`,
    historyApiFallback: true,
    inline: true,
    hot: true,
    open: true,
    port: 3030
  },
  plugins: plugins
}


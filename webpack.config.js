const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_DIR = `${__dirname}/public/assets/`
const pathsToClean = [ `${DIST_DIR}css`, `${DIST_DIR}js`, ]
const cleanOptions = { exclude:  [] }

let entry = {}
let plugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev') }),
  new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
  new ExtractTextPlugin('css/[name].css')
]

switch (process.env.NODE_ENV) {
  case "prod":
    entry = { bundle: ['./src/js/vendor/index.js', './src/js/main/index.js', './src/js/app/index.js'] }
    plugins.push(new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" }))
    plugins.push(new CleanWebpackPlugin(pathsToClean, cleanOptions))
    break
  case "vendor":
    entry = { "dev-vendor": './src/js/vendor/index.js' }
    plugins.push(new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" }))
    break
  case "dev":
    entry = { "dev-index": [ 'babel-polyfill', './src/js/main/index.js' ] }
    break
  case "app":
    entry = { app: [ './src/js/app/index.js' ] }
    break
  default: break
}

module.exports = {
  entry: entry,
  output: { path: DIST_DIR, filename: 'js/[name].js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', { 'modules': false }]
            ]
          }
        }]
      },
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   options: {}
      // },
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true, minimize: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } }
          ]
        })
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'vendor' ? false : 'inline-source-map',
  plugins: plugins
}


const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const DIST_DIR = `${__dirname}/public/assets/`

module.exports = [
  {
    entry: { "dev-index": [ 'babel-polyfill', './src/js/main/index.js' ] },
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
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {}
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ]
  },
  {
    entry: { "dev-index": './src/styles/postcss/index.css' },
    output: { path: DIST_DIR, filename: 'css/[name].css' },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader'
            }
          ]
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
    plugins: [
      new ExtractTextPlugin('css/[name].css')
    ]
  }
]


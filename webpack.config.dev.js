const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const outputPath = `${__dirname}/public/assets/`

module.exports = [
  {
    entry: { dev: [ 'babel-polyfill', './src/js/main/index.js' ] },
    output: { path: outputPath, filename: 'js/[name].js' },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                'flow',
                ['env', { 'modules': false }]
              ],
              plugins: ['transform-flow-strip-types']
            }
          }]
        },
        // {
        //   enforce: "pre",
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   loader: "eslint-loader",
        //   options: {}
        // }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ]
  },
  {
    entry: { dev: './src/styles/postcss/index.css' },
    output: { path: outputPath, filename: 'css/[name].css' },
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


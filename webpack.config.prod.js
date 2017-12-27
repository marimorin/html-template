const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const outputPath = `${__dirname}/public/assets/`

module.exports = [
  {
    entry: { bundle: [ 'babel-polyfill', './src/js/vendor/index.js', './src/js/main/index.js' ] },
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
                ['env', { 'modules': false }]
              ]
            }
          }]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
      new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" }),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ]
  },
  {
    entry: { bundle: ['./src/styles/vendor/index.scss', './src/styles/postcss/index.css'] },
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
    plugins: [
      new ExtractTextPlugin('css/[name].css')
    ]
  }
]


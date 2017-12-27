const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const outputPath = `${__dirname}/public/assets/`

module.exports = [
  {
    entry: { vendor: './src/js/vendor/index.js' },
    output: { path: outputPath, filename: 'js/[name].js' },
    plugins: [
      new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  },
  {
    entry: { vendor: './src/styles/vendor/index.scss' },
    output: { path: outputPath, filename: 'css/[name].css' },
    module: {
      rules: [
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'url-loader'
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { minimize: true }},
              { loader: 'sass-loader' }
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


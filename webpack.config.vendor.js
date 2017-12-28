const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const DIST_DIR = `${__dirname}/public/assets/`

module.exports = [
  {
    entry: { "dev-vendor": './src/js/vendor/index.js' },
    output: { path: DIST_DIR, filename: 'js/[name].js' },
    plugins: [
      new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  },
  {
    entry: { "dev-vendor": './src/styles/vendor/index.scss' },
    output: { path: DIST_DIR, filename: 'css/[name].css' },
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


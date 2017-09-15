const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PLUGINS = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new ExtractTextPlugin('css/[name].css')
];

module.exports = {
  entry: {
    bundle: ['./src/js/index.js', './src/pcss/index.css']
  },
  output: {
    path: path.resolve(__dirname, 'public/assets/'),
    filename: 'js/[name].js'
  },
  devtool: process.env.NODE_ENV === 'production'
    ? false
    : 'inline-source-map',
  // devServer: {
  // 	contentBase: 'public',
  // 	port: 3030,
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          // 自動修正させる
          fix: true,
          // eslintでエラーだしたらビルドを中断する
          failOnError: true,
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            }
          ]
        })
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production'
    ? PLUGINS.concat([
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      })
    ])
    : PLUGINS.concat([
      // new webpack.HotModuleReplacementPlugin()
    ])
}

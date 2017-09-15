const PLUGINS = [
  require('postcss-import')({
    plugins: [
      require('stylelint')
    ]
  }),
  require('autoprefixer')({
    browsers: 'last 2 versions'
  }),
  require('postcss-custom-properties'),
  require('postcss-nested'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  // require('postcss-apply'),
  require('postcss-custom-media'),
  require('postcss-flexbugs-fixes'),
  require('postcss-sorting')
]
module.exports = (ctx) => {
  const IS_PROD = ctx.env === 'production'; // process.env.NODE_ENV
  return {
    plugins: IS_PROD ? PLUGINS.concat([require('cssnano')]) : PLUGINS
  }
}


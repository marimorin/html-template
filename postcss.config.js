const PLUGINS = [
  require('postcss-import'),
  require('autoprefixer')({
    browsers: 'last 2 versions'
  }),
  require('postcss-custom-properties'),
  require('postcss-apply'),
  require('postcss-for'),
  require('postcss-nested'),
  require('postcss-mixins'),
  require('postcss-calc')({ selectors: true }),
  require('postcss-simple-vars'),
  require('postcss-custom-media'),
  require('postcss-flexbugs-fixes'),
  require('postcss-sorting')
]
module.exports = (ctx) => {
  const IS_PROD = ctx.env === 'production'
  return {
    plugins: IS_PROD ? PLUGINS.concat([require('cssnano')]) : PLUGINS
  }
}


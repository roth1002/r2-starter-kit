module.exports = ({ options, env }) => ({
  parser: 'sugarss',
  plugins: {
    'postcss-import': env === 'production' ? options['postcss-import'] : false,
    'postcss-preset-env': env === 'production' ? options['postcss-preset-env'] : false,
    'cssnano': env === 'production' ? options['cssnano'] : false,
  },
});

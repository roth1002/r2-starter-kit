const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  entry: {
    app: path.resolve(__dirname, 'src/index'),
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-loadable',
      'prop-types',
      'redux',
      'redux-saga',
      'redux-actions',
      'history',
      'connected-react-router',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.scss|\.css$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? {
              loader: 'style-loader',
              query: {
                sourceMap: true,
              },
            }
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: '[folder]-[local]-[hash:6]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')(),
                require('postcss-import')(),
                require('cssnano')(),
              ],
              config: {
                ctx: {
                  'postcss-import': {
                    path: [path.resolve(__dirname, 'src')],
                  },
                  'postcss-preset-env': {
                    browsers: 'last 2 versions, ie > 9',
                  },
                  cssnano: {},
                },
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  entry: {
    app: path.resolve(__dirname, 'src/index'),
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
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        shared: {
          name: 'shared',
          minChunks: 2,
          test: /\.jsx?$/,
        },
        styles: {
          name: 'styles',
          minSize: 0, //Ignore minSize for CSS files, to force them in new chunks
          test: /\.scss|\.css$/,
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
        },
      },
    },
  },
};

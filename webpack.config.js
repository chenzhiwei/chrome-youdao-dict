const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname),
  entry: {
    './js/bubble': ['./src/script/bubble.js'],
    './js/popup': ['./src/script/popup.js'],
    './js/background': ['./src/script/background.js'],
    './js/options': ['./src/script/options.js']
  },
  mode: 'production',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: 'file-loader?name=font/[name].[ext]'
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader'
      }
    ]
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'manifest.json', to: 'manifest.json' },
        { from: 'src/lib/jquery/jquery.min.js', to: 'lib/jquery/jquery.min.js' },
        { from: 'src/lib/materialize/js/materialize.min.js', to: 'lib/materialize/js/materialize.min.js' },
        { from: 'src/img/icon.png', to: 'img/icon.png' },
      ]
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/tpl/popup.pug',
      filename: 'popup.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/tpl/options.pug',
      filename: 'options.html'
    })
  ]
};

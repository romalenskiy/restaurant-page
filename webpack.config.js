const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|jpg|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                  name: '[path][name].[ext]',
                  context: path.resolve(__dirname, "src/")
              }
          }
          ]
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {from: 'src/img', to: 'img'}
    ])
  ]
};
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
  ]
};
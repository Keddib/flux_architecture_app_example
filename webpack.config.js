// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const port = process.env.PORT || 8000
const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    new webpack.ProgressPlugin(),
    new ESLintPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  devtool: 'inline-source-map',
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    hot: true
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};

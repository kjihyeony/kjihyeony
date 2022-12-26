const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports={
  //진입점
  entry: './src/index.js',
  //번들링 파일이 위치할 파일path, 파일명 지정
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: './fonts/[name][ext]',
      },
      },
      {
        test: /\.s[ac]ss/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(ico|png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
      // SVG 로더
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './html/contact.html',
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './html/project.html',
      filename: 'project.html'
    }),
    new HtmlWebpackPlugin({
      template: './html/our.html',
      filename: 'our.html'
    }),
    new MiniCssExtractPlugin({
      filename: "common.css",
    }),
    new CleanWebpackPlugin (),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
      publicPath: "/"
    },
    port: 8080,

  },
}
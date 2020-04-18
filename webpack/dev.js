const webpack = require("webpack")
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const distDir = __dirname + "/dist";

module.exports = {
  entry: './example/main.js',
  output: {
    path: distDir,
    filename: 'example.js'
  },
  devtool: 'source-map',
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: path.join(__dirname, '../example'),
    historyApiFallback: true,
    inline: true,
    // port: 5002,
    hot: true,
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              ['import', {
                libraryName: 'zarm',
                style: true, // or 'css'
              }],
            ]
          }
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
        use: 'url-loader?limit=8129',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
}
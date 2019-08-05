const webpack = require("webpack")
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './example/index.js',
    output: {
      path: path.join(__dirname, '../example'),
      filename: 'example.js'
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
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
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
          {
            loader: "postcss-loader",
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
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const outDir = 'lib';

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, outDir),
    filename: `[name].js`,
    library: { name: 'editor', type: 'umd' }
  },
  devServer: {
    port: 8880
  },
  externals: {
    React: 'react',
    ReactDom: 'react-dom'
  },
  module: {
    rules: [
      {
        test: /\.tsx?|.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CaseSensitivePathsPlugin()
  ]
}
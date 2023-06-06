const webpack = require('webpack');
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const outDir = 'lib';

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: {
    filename: `[name].js`,
    path: path.join(__dirname, outDir),
    library: { name: 'icrules', type: 'umd' }
  },
  module: {
    rules: [
      {
        test: /\.tsx?|.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CaseSensitivePathsPlugin()
  ]
}
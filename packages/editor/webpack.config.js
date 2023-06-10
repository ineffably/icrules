const webpack = require('webpack');
const path = require('path');
const outDir = 'lib';

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, outDir),
    filename: `index.js`,
    library: { name: 'editor', type: 'umd' }
  },
  devServer: {
    port: 8880
  },
  externals: {
    React: 'react',
    ReactDOM: 'react-dom',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react': 'react',
    'react-dom': 'react-dom'
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
  }
}
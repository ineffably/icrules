const webpack = require('webpack');
const path = require('path');
const outDir = 'lib';
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, outDir),
    filename: `index.js`,
    library: { name: 'editor', type: 'umd' }
  },
  externals: {
    React: 'react',
    ReactDOM: 'react-dom',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react': 'react',
    'react-dom': 'react-dom',
    'antd': 'antd',
    '@ant-design/icons': '@ant-design/icons'
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
    new BundleStatsWebpackPlugin()
  ]
}
const webpack = require('webpack');
const path = require('path');
const outDir = 'lib';
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const plugins = [];

const config = (env, argv = {}) => {
  const mode = argv.mode || 'production';
  const devMode = mode !== 'production';

  // plugins.push(new BundleStatsWebpackPlugin()); // Uncomment to enable bundle stats

  if(!devMode) {
    plugins.push(new MiniCssExtractPlugin())
  }

  const result = {
    mode,
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
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
            'css-loader'
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins
  }

  if(devMode) {
    result.devtool = 'inline-source-map';
  }
  
  return result;
}

module.exports = config;
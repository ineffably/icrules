const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outDir = 'lib';

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'inline-source-map',
    entry: './src/index.ts',
    output: {
      path: path.join(__dirname, outDir),
      filename: isProduction ? 'examples.[contenthash].js' : 'examples.js',
      clean: true
    },
    devServer: {
      port: 8080,
      static: {
        directory: path.join(__dirname, './'),
        publicPath: '/'
      },
      hot: true
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
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './index.html'),
        minify: isProduction
      }),
    ],
    optimization: {
      minimize: isProduction
    }
  };
};

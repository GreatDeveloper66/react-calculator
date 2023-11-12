const { resolve } = require('path');
const dotenviornment = require('dotenv')
require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
      }
    ],
  },
  devServer: {
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    port: process.env.PORT,
    historyApiFallback: true,
    allowedHosts: "all"
  },
  
};



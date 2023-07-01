const { resolve } = require('path');

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
    ],
  },
  devServer: {
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    port: 8080,
    historyApiFallback: true,
  },
};

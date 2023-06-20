import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
};
export const module = {
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
};
export const devServer = {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true,
};
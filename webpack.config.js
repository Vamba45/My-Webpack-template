const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    }, 
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'assets/script/[name].js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Message from HTML-plugin',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, './src/assets'), 
                    to: path.resolve(__dirname, './dist/assets'), 
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "assets/style/[name].css"
        })
    ],
    module: {
        rules: [
            //JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            //CSS, PostCSS, Sass
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            //Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[hash][ext][query]'
                },
            },
            //Fonts 
            {
              test: /\.(woff2?|eot|ttf|otf)$/i,
              type: 'asset/resource',
              generator: {
                  filename: 'assets/fonts/[hash][ext][query]'
              },
            },
        ]
    }
}
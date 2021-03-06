const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {    
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/bundle.js',
    },    
    mode: 'production',    
    // mode: 'development',    
    plugins: [
        new HtmlWebpackPlugin({
            // template: './public/index.html'
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets/images", to: "./img" },           
            ],
        }),
        new MiniCssExtractPlugin({ 
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),
    ], 
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },       
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    }, 
}
let path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
let conf = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    
};

module.exports = conf;
module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }
        )]
    };  
  
  
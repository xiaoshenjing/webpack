const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    stats: { children: false },

    // 追踪编译过程的语法错误
    devtool: 'inline-source-map',

    // 热更新：告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
    devServer: {
        contentBase: './dist',
        open: true
    },

    plugins: [
        // 指定 process.env.NODE_ENV 为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});
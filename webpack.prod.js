const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ManifestPlugin = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',

    output: {
        // 配置服务器资源路径
        publicPath: './'
    },

    plugins: [
        // 每次编译清理 /dist 文件
        new CleanWebpackPlugin(),
        // 生成 manifest.json 日志文件，记录编译前的映射
        new ManifestPlugin(),
        // 指定 process.env.NODE_ENV 为生产环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
});
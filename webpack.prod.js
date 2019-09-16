const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = merge(common, {
    mode: 'production',

    plugins: [
        // 生成 manifest.json 日志文件，记录编译前的映射
        new ManifestPlugin(),
        // 指定 process.env.NODE_ENV 为生产环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
});
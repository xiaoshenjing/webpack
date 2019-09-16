const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { // 入口文件
    entry: { app: './src/index.js' },
    // entry: { // 分离入口
    //     app: './src/index.js',
    //     print: './src/print.js'
    // },

    output: { // 输出文件
        // filename: '[name].bundle.js',
        // chunkhash：用于创建一个动态改变的 hash 防止文件部署浏览器缓存同名文件
        filename: '[name].[chunkhash].js',
        // 动态 import() 导入文件
        chunkFilename: '[name].[chunkhash].js',
        // filename: '[name].bundle.js', // 分离出口
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        // 它会用新生成的 index.html 文件，把我们的原来的 index.html 文件替换
        // 更多 https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            // 设置 title
            title: 'My App'
        }),
    ],

    module: { // 类型引入
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 加载 css
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }, // 加载图片
            // 更多参见：https://www.webpackjs.com/guides/asset-management/
        ]
    }
}
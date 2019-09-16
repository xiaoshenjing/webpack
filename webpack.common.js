const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = { // 入口文件
    entry: { app: './src/index.js' },
    // entry: { // 分离入口
    //     app: './src/index.js',
    //     print: './src/print.js'
    // },

    output: { // 输出文件
        filename: '[name].bundle.js',
        // filename: '[name].bundle.js', // 分离出口
        path: path.resolve(__dirname, 'dist'),
        // 配置服务器资源路径
        publicPath: '/'
    },

    plugins: [
        // 每次编译清理 /dist 文件
        new CleanWebpackPlugin(),
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
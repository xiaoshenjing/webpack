const path = require('path')

module.exports = {
    // entry: './src/index.js', // 入口文件
    entry: { // 分离入口
        app: './src/index.js',
        print: './src/print.js'
    },

    output: { // 输出文件
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    module: { // 类型引入
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 加载 css
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] }, // 加载图片
            // 更多参见：https://www.webpackjs.com/guides/asset-management/
        ]
    }
}
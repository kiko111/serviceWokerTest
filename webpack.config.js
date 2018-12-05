const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3001,               // 端口
    host: '0.0.0.0',          // 可以以localhost\127.0.0.1\ip访问
    // historyApiFallback: true, // H5 history使用
    // https: false,             // https服务开启
    // disableHostCheck: true,   // host检查关闭
    contentBase: './dist'
	},
};
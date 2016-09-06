/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  //入口
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './static/scripts/main'
  ],
  devtool: 'eval-source-map',
  //输入
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  //插件项
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  //其他解决方案配置
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: [ '', '.js', '.jsx', '.json', '.css', '.less' ]
  },
  //KEY给require使用，value作为全局使用
  externals: {
    "jquery": "jQuery"
  },
  //加载器配置
  //每一个test使用什么loaders来进行处理
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['react-hot-loader', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-1'],
                // query: {
                //     presets: ['react', 'es2015', 'stage-1'], // requires babel-preset-<name>
                //     plugins: ['transform-runtime']
                // },
                include: path.join(__dirname, 'static/scripts')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?minimize",
                include: path.join(__dirname, 'static/styles')
            },
            {
                test: /\.(less)$/,
                loader: "style-loader!css-loader!less-loader?minimize",
                include: path.join(__dirname, 'static/styles')
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=8192",
                include: path.join(__dirname, 'static/images')
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            }
       ]
    }
};

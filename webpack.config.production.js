/* eslint-disable no-var */
var path = require('path');

var bower_dir = __dirname + '/bower_components';
var webpack = require('webpack');

var adminIdentity = process.argv[4];

console.log(adminIdentity);

var timestemp = new Date().getTime();

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },

  //其他解决方案配置
  resolve: {
    //模块别名自定义，方便不用写长长的地址
    alias: {
    },
    //自动跨站文件后缀名，引入时可以省略后缀名
    extensions: [ '', '.js', '.jsx' ]
  },

  //入口文件配置
  entry: {
    app: ['./'+ adminIdentity +'/main'],
    vendors: ['react', 'react-router', 'moment']
  },

  //入口文件输出配置
  output: {
    path: __dirname + '/dist/' + adminIdentity + '/',
    filename: 'bundle.js',
    publicPath: '/dist/' + adminIdentity + '/'
    // publicPath: timestemp + ''
  },

  //插件项
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    //提取多个入口的脚本，生成一个vendors.js
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  externals: {
    "jquery": "jQuery",
    "amap": "AMap"
  },

  //加载器配置
  //每一个test使用什么loaders来进行处理
  module: {
    noParse: [],
    loaders: [
    {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'static/js/src'),
        path.join(__dirname, adminIdentity)]
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader",
      include: path.join(__dirname, 'static/css')
    }
   ]
  }
}

//用react代替路径
config.addVendor('react', bower_dir + '/react/react-with-addons.min.js');
config.addVendor('react-router', bower_dir + '/react-router/build/umd/ReactRouter.min.js');
config.addVendor('moment', bower_dir + '/moment/min/moment.min.js');
config.addVendor('flux', bower_dir + '/flux/dist/Flux.js');
// config.addVendor('moment', bower_dir + '/moment/moment.js');

module.exports = config;

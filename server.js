const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    // progress:true,
    inline: true,
    // quiet: true,
    // lazy: true,
    // noInfo:true,  //不用输出打包信息
    stats: {
        colors: true  // 用颜色标识
    },
    disableHostCheck: true,
    headers:{
        'Access-Control-Allow-Origin': '*'
    },
    compress:true,
    proxy: {
        '/app/*': {
            target: 'http://www.ih5.cn',
            changeOrigin: true,
            // host:'localhost:3000',
            secure: false
        }
    }
});
const port = 3333 ;
server.listen(port, '0.0.0.0',(err)=>{
    console.log(`${ err ? err : `Listening at localhost:${port}` }`)
});
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口
    entry: {
        index:[
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './static/scripts/main'
        ]
    },
    devtool: 'false',
    // devtool: 'eval-source-map',
    //输入
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    //插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     comments: false,        //去掉注释
        //     minimize: true,
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(`\\.(${['html','js', 'css'].join('|')})$`),
            threshold: 10240,
            minRatio: 0.8
        }),
        // 提取出CSS
        new ExtractTextPlugin('style.css'),
        // 压缩CSS容易造成样式bug
        // new OptimizeCSSPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html', // 模板路径
            inject: true,              // js插入位置
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
            },
            chunksSortMode: 'dependency'
        })
    ],
    //其他解决方案配置
    resolve: {
        modules: [
            path.join(__dirname, "node_modules")
        ],
        extensions: [ '.js', '.jsx', '.json', '.css', '.less' ]
    },
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    //KEY给require使用，value作为全局使用,用作外部引入简化打包体积
    externals: {
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        'axios': 'Axios',
        // 'react-router':'ReactRouter',
        // 'flux': 'Flux',
        'immutable':'Immutable'
    },
    //加载器配置
    //每一个test使用什么loaders来进行处理
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:"babel-loader",
                options: {
                    cacheDirectory: true,
                    presets: [['es2015', {loose: true, module: false}], 'stage-1','react'],
                },
                include: path.join(__dirname, 'static/scripts'),
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader'],
                include: path.join(__dirname, 'static/styles'),
                exclude: "/node_modules/"
            },
            {
                test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader'],
                include: path.join(__dirname, 'static/styles'),
                exclude: "/node_modules/"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                        },
                    }
                ],
                include: path.join(__dirname, 'static/images')
            }
        ]
    }
};

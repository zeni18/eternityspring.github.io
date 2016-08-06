var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        "./src/js/entry.js",
    ],
    output: {
        path: './dist',
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
            favicon:'./src/favicon.ico', //favicon路径
            filename:'/index.html',    //生成的html存放路径，相对于 path
            template:'./src/index.html',    //html模板路径
            inject:true,    //允许插件修改哪些内容，包括head与body
            // hash:true,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            }
        }),
        new webpack.optimize.UglifyJsPlugin({    //压缩代码webpack内置的
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/images/**/*', to: '/dist/images'
            }
        ])
    ],
    devServer: {
        proxy: {
            '/dist': {
                target: 'localhost',
                secure: false
            }
        },
        hot: true
    }
};
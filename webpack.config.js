const  webpack = require('webpack');
const path = require('path');
module.exports = {
    mode: 'development',
    // 这个配置是项目的入口文件的配置
    entry: {
        myBuild: './src/index.js' 
    },
    output: {
        // 这个是指定项目打包后的输出目录,__dirname就是webpack.config.js所在的目录,这里就是打包时打包到项目根目录下的build文件夹下(如没有webpack会自己创建)
        path: path.resolve(__dirname, './build'),
        // 这个是关系到我们项目发布后，一些资源的访问路径问题，后面会讲到，而且这个也跟我们开发时候的热部署有关，让他指向我们的打包后的路径就行。
        publicPath:"build/",
        // 这是打包后的js文件名字,这个[name]就是我们在上面的entry中指定的Key.也就是myBuild
        filename: '[name].js' 
    },
    // 这是跟服务相关的配置，具体可以去看官网
   devServer: {
    port:9090 //端口你可以自定义
   },
   // 下面的配置主要就是一些loader.关于loader我的理解就是配置一些webpack对于各种资源的打包规则
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /(node_modules|bower_components)/,
                 use: {
                     loader: 'babel-loader',
                     options: {
                         presets: ["es2015","react",'stage-0']
                     }
                 }
             },
             {
                 test: /\.css$/,
                 use: [ 'style-loader', 'css-loader' ]
             },
             {
                 test: /\.(png|jpg|gif)$/,
                 use: [
                     {
                         loader: 'file-loader',
                         options: {
                             name: '[name]_[hash].[ext]',
                             outputPath: './img',
                             publicPath: 'build/img/'
                         }
                     }
                 ]
             },
             // {
             //     test: /\.(png|jpg|gif)$/,
             //     use: [
             //         {
             //             loader: 'url-loader',
             //             options: {
             //                 limit: 8192,
             //             }
             //         }
             //     ]
             // },
             {test: /\.json$/, loader: 'json-loader'},
             {test: /\.(woff|woff2|svg|eot|ttf)$/, loader: 'url-loader?limit=50000&name=fonts/[name].[hash].[ext]'}
        ]
    }
}
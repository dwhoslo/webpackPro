const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  mode: "development",
  // 指定入口文件
  entry: "./src/main.ts",
  
  // 开发模式使用，方便查错误
  devtool: "inline-source-map",
  
  // 配置服务器
  devServer: {
    static: {
        directory: path.resolve(__dirname, "dist"),
        staticOptions: {},
        // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
        // Can be:
        // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
        publicPath: "./",
        // Can be:
        // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
        serveIndex: true,
        // Can be:
        // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
        watch: true,
      },
    open: true,
    port:3030,
    hot: true,
    // contentBase: "./dist",
    client: {
        overlay: {
          warnings: false,
          errors: true,
        },
      },
    
    proxy: {
        '/proxy': {
            target: '',
            changeOrigin: true,
            pathRewrite: {
                '^/proxy': ''
            }
        }

    }
  },
  
  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false, // 关闭webpack的箭头函数，可选
    },
  },
  
  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],//配置文件引入时省略后缀名
    alias: {
      'vue$': 'vue',
      jquery: "jquery/src/jquery",
    }
  },
  
  // 配置webpack的loader
  module: {
    rules: [
        {
          test: /\.ts?$/,
          use: {
          loader: "ts-loader",
          },
          exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            // use: ['style-loader', 'css-loader']
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader'
            ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'url-loader', // url-loader file-loader下载
          options: {
              limit: 8 * 1024, // 将小于8kb的图片用based64处理
              esModule: false,//关闭url-loader的es6语法模块法解析，使用commonjs
              name:'img/[name].[hash:10].[ext]'
          },
          type:'javascript/auto' //转换 json 为 js

        },
          // html文件中src图片资源
        {
            test:/\.html$/,
            loader:'html-loader'
        },
        // 导入less文件
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            }, 
            {
              loader: "css-loader" // translates CSS into CommonJS
            }, 
            {
                loader: "less-loader" // compiles Less to CSS
            }
          ]
        },
        /*配置url*/
        
        /*配置es6转es5*/
        {
          test: /\.js$/,
          /*排除以下文件夹转换*/
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        },
        /*配置vue-loader和vue-template-compiler*/
        {
          test: /\.vue$/,
          use: ['vue-loader']
        },
        {
          test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
          use: [{
            loader: 'expose-loader',
            options: 'jQuery'
          }, {
            loader: 'expose-loader',
            options: '$'
          }]
        }
    ],
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
    minimize:true,    //开发环境开启css优化
  },
  // 配置webpack的插件
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    // new CssMinimizerPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
};
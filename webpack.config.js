//引入webpack,压缩代码用
var webpack = require("webpack")
//css抽离的插件
var ExtractTextPlugin = require("extract-text-webpack-plugin")
//自动生成html的插件
var HtmlWebpackPlugin = require("html-webpack-plugin")
//自动打开浏览器插件
var OpenBrowserPlugin = require("open-browser-webpack-plugin")



module.exports = {
	//入口
	entry:{
		app:"./src/script/app.js"//版本号控制相关
	},
	
	//出口
	output:{
		path:__dirname+"/build",
		filename:"app.js",
//		filename:"[name]_[hash].js"//生成不同的名字,版本号控制
	},
	//webserver服务器
	devServer:{
		contentBase:"./build",//路径
		host:"localhost",
		port: 2000,
		proxy: {
	      '/json': {
	        target: 'http://localhost:7001',
	        pathRewrite: {'^/json': ''}
	      	},
	     '/api': {
	        target: 'https://api.liwushuo.com',
	        changeOrigin: true,
	        pathRewrite: {'^/api': ''}
	    	 },
	    	'/nodejs': {
		        target: 'http://localhost:8000',
		        changeOrigin: true,
		        pathRewrite: {'^/nodejs': ''}
		      }
	    }
	},
	//模块
	module:{
		loaders:[
			//将ES6进行成ES5
			{
				test:/\.js$/,
				exclude:/node_modules/,//除了这里面的js文件
				loader:"react-hot-loader!babel-loader"
			},
			//css打包
//			{
//				test:/\.css$/,
//				loader:"style-loader!css-loader"
//			},
			//css打包并抽离出来
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",//css最后一步的抽离
					use:"css-loader"//使用
				})
			},
			//scss打包
//			{
//				test:/\.scss$/,
//				loader:"style-loader!css-loader!sass-loader"
//			}
			//scss打包并抽离
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader!sass-loader"
				})
			}
		]
	},
	
	//插件
	plugins:[
	//抽离CSS样式到文件(之前引入了这个对象)
	new ExtractTextPlugin({
//		filename:"[name]_[hash].css",//生成的名字
		filename:"app.css",
		allChunks:true,//多入口
		disable:false
	}),
	
	//根据模板自动生成html
	new HtmlWebpackPlugin({
		template:"./src/index.ejs",//模板路径
		filename:"index.html",
		title:"天天果园",
		name:"光耀"
	}),
	
	//压缩代码
//	new webpack.optimize.UglifyJsPlugin({
//		compress:{//压缩的警告去掉
//			warnings:false
//		},
//		output:{//注释去掉
//			comments:false
//		}
//	}),
	
	//自动打开浏览器
//	new OpenBrowserPlugin({
//		url:"http://localhost:7000"
//	})

	// 5: 更改环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
	],
	// 组件抽离
	  externals: {
	    'react': 'window.React',
	    'react-dom': 'window.ReactDOM',
	    'react-router': 'window.ReactRouter'
	  }
}

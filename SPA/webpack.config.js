var webpack = require('webpack');
var path =require ('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = {
   
   entry: './app/components/main.js',
	
   output: {
      path:'./',
      filename: 'app.js'
   },
	
   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins:[
      new OpenBrowserPlugin({url:'http://localhost:8080/app/index.html'})
   ]
}

module.exports = config;
var webpack = require('webpack');
var path =require ('path');

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
   }
}

module.exports = config;
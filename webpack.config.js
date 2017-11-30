/* eslint-disable */
const path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let config = {
	context: path.resolve(__dirname, './src'),
	devtool: 'source-map',
	entry: {
		app: './index.js',
	},
	output: {
		filename: 'components.bundle.js',
		path: path.resolve(__dirname, './dist'),
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				//using .babelrc
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader'
				}],
			},
			{
				test: /\.css$/,
				exclude: [/node_modules/],
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							root: '.',
							localIdentName: '[path][name]__[local]--[hash:base64:5]',
						}
					}, 'postcss-loader']
				})
			}
			//loaders for other file types can go here
		]
	},
	externals: {
		'react': 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
		'react-router-dom': 'commonjs react-router-dom',
		'react-dom': 'commonjs react-dom',
	},
	plugins: [
		new ExtractTextPlugin("styles.css"),
	]
}

module.exports = config;
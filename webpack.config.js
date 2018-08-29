/* eslint-disable */
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, './src'),
	devtool: 'source-map',
	entry: {
		components: './index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},
	externals: {
		react: 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
		'react-router-dom': 'commonjs react-router-dom',
		'react-dom': 'commonjs react-dom',
		'styled-components': 'commonjs styled-components'
	}
};

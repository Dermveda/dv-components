const path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                //using .babelrc
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }, {
                test: /(\.scss|\.css)$/,
                exclude: [/node_modules/],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // modules: true,
                                importLoaders: 1,
                                root: '.',
                                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            }
                        },
                        'sass-loader'
                    ]
                })
            }, {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
	plugins: [
		new ExtractTextPlugin("styles.css")
	]
};

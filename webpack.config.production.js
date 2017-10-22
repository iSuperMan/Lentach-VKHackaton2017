var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },

      {
				test: /\.css$/,
        use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
							},
						},
						'resolve-url-loader',
						'postcss-loader',
						'sass-loader',
					],
				}),
			},

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"',
			},
			__DEVELOPMENT__: false,
		}),
		new ExtractTextPlugin({
			filename: 'bundle.css',
			allChunks: true,
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			comments: false,
		}),
	],
};

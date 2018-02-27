

module.exports = {
  entry: './client/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
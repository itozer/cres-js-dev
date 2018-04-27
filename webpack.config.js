const path = require('path'); //for node??

module.exports = {
  mode: 'development',
  context: __dirname, //always run from the root directory of the project
  entry: './js/app.js',
  devtool: 'cheap-eval-source-map', //inline all of the source maps
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  /**
  if we wanted to use webpack as a test web server
  devServer: {
    publicPath: '/public/'
  }
  */
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre', //pre is to make sure this runs before babel runs.
        test: /\.jsx?$/,
        loader: 'eslint-loader', //this runs eslint linting rules on code that changes (editor is also doing this)
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/, //the file extension must be js, and possibly x (jsx) run through babel
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = {
  entry: {
    List: './src/List.jsx'
  },
  output: {
      path: __dirname + '/web',
      filename: '[name].js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    extensions: ['', ".js", ".jsx", ".es6"]
  },
  module: {
    loaders: [{
      test: /(\.jsx?$|\.es6?$|\.js?$)/,
      loader: 'babel',
      query:
      {
          presets:['es2015', 'react']
      }
    }]
  }
}
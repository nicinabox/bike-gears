module.exports = {
  entry: {
    main: [
      './src/main.js'
    ]
  },
  output: {
    path: 'build',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  }
}

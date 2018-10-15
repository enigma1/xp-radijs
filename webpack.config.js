const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "www"),
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: ['node_modules', 'www'],
    aggregateTimeout: 500,
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              require('@babel/plugin-proposal-object-rest-spread')
            ]
          }
        }
      }
    ]
  }
}
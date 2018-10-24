const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const distPath = './www';
const distAbsPath = path.resolve(__dirname, distPath);

console.log('path is', distPath);
module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: distAbsPath,
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: ['node_modules', 'www'],
    aggregateTimeout: 500,
    poll: 1000
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: 'index.html',
        toType: 'file'
      },
      {
        from: 'src/assets',
        to: 'assets',
        toType: 'dir'
      }
    ])
  ],
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
              require('@babel/plugin-transform-react-jsx', {
                "pragma": "dom", // default pragma is React.createElement
                "pragmaFrag": "DomFrag", // default is React.Fragment
                "throwIfNamespace": false // defaults to true
              }),
              //require('@babel/plugin-syntax-jsx'),
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", {"loose": true}],
              require('@babel/plugin-proposal-object-rest-spread'),
              require('babel-plugin-transform-radi-listen')
            ]
          }
        }
      }
    ]
  }
}
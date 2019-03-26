const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  // watch: true,
  devtool: 'source-map',

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    host: '127.0.0.1',
    port: 9000
  }
};











// const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//
// module.exports = {
//   entry: './js/app.js',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'main.js'
//   },
//
//   devtool: "source-map",
//
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: ['@babel/plugin-transform-runtime']
//           }
//         }
//       }
//     ]
//   },
//
//   optimization: {
//     // minimize: true,
//     minimizer: [
//       new UglifyJsPlugin({
//         sourceMap: true,
//       })
//     ],
//   },
//
//   devServer: {
//     contentBase: path.join(__dirname, 'public'),
//     compress: true,
//     port: 9000
//   }
// };

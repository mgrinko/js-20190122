















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

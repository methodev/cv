//====================================================|
// WEBPACK PROD LOADERS: INTERNAL CSS


//--------------------------| Import

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const resources = require('../../common/staff/cssResources');


//--------------------------| Export

module.exports = {
  test: /\.s?css$/,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader', // translates CSS into CommonJS
      options: {
        sourceMap: false,
        localsConvention: 'dashes',
        modules: {
          localIdentName: '[hash:base64:5]'
        }
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: './postcss.config.js'
        }
      }
    },
    {
      loader: 'sass-loader', // compiles Sass to CSS
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources
      }
    }
  ]
};

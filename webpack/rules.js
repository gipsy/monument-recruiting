const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rules = ({sourcePath, jsSourcePath, imgPath, nodePath, isProduction}) => [
  {
    test: /\.(js|jsx)$/,
    include: [
      sourcePath, nodePath + '/react-toolbox/components', // if we use the react toolbox u
    ],
    loader: 'babel-loader',
    options: {
      presets: [
        [
          'env', {
            modules: false
          }
        ],
        'react',
        'stage-1'
      ]
    }
  }, {
    test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
    include: [
      imgPath,
      nodePath
    ],
    loader: 'url-loader',
    options: {
      limit: 10000
    }
  },
  {
    test: /\.(css|sass|scss)$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: "style-loader",
      use: [
        'css-loader',
        'postcss-loader',
        'resolve-url-loader',
        'sass-loader',
      ].join('!')
    })
  },
]
module.exports = rules;

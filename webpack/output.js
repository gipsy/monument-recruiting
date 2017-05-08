
const output = ({buildPath}) => ({
  path: buildPath,
  publicPath: '/',
  filename: '[name]-[hash].js'
})

module.exports = output;

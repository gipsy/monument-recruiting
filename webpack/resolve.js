

const resolve = ({ nodePath, jsSourcePath, imgPath }) => ({
  extensions: [
    '.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.css', '.sass', '.scss'
  ],
  modules: [
    nodePath,
    jsSourcePath,
    imgPath,
  ]
})

module.exports = resolve

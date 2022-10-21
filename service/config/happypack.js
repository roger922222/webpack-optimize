const HappyPack = require('happypack')

module.exports = base => {
  // 替换loader工作
  let loader = base.module.rules.find(v => v.test.toString() === '/\\.css$/')

  Object.assign(loader, {
    test: /\.css$/,
    use: 'happypack/loader?id=css'
  })

  base.plugins.push(
    new HappyPack({
      id: 'css',
      loader: ['style-loader', 'css-loader', 'postcss-loader']
    })
  )

  return base
}
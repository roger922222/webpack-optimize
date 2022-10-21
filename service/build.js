let base = require('./config/base')
const cache = require('./config/cache')
const speedMeasure = require('./config/SpeedMeasure')
// const happypack = require('./config/happypack')
// const terser = require('./config/terser')

// 添加缓存
//  cache(base)

// happypack(base) // 反向优化

// terser(base)

// // noParse
// require("./config/noParse")(base);

// 走生产模式
base.mode = 'production'

// 速度分析
// base = speedMeasure(base)

console.log(base, 'base-base')

module.exports = base
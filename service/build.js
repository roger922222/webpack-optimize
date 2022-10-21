let base = require('./config/base')
const cache = require('./config/cache')
const speedMeasure = require('./config/SpeedMeasure')

// 添加缓存
base = cache(base)

// 走生产模式
base.mode = 'production'

base = speedMeasure(base)

module.exports = base
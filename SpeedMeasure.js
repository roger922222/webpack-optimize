const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const config = require('./webpack.config')

const smp = new SpeedMeasurePlugin()

// 包住webpack配置
module.exports = smp.wrap(config)
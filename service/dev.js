const base = require('./config/base')
const lazyCompilation = require('./config/lazyCompilation')

lazyCompilation(base)

base.mode = 'development'

module.exports = base
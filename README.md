# webpack5 优化


# 构建性能
# 持久化缓存技术
- 不重复干：缓存
- 一块干：并行处理
- 快干：提高效率、高效编译期、编译路径
- 少干：减少过程

# 并行开发 loader一起加载，资源一起加载等

# 减少编译的范围，如vue,vue-router,pinia不进行编译 在module设置noParse

# 使用高效的编译器  如esbuild @swc/core 进行压缩  速度快到2倍以上

# 缓存 使用webpack 自带的cache

# 减少编译  lazyCompilation：true  require('./xx')  或 import('./xxx')不会立即编译  开发环境比较合适
# 减少编译 loader exclude 全部忽略node_modules


# 简化构建
# 开发模式禁用 minimize 压缩 splitChunks 分包 tree-shaking 检查无用的模块  
# sourcemap  
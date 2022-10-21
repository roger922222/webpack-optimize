module.exports = base =>  {
  return Object.assign(base, {
    experiments: {
      lazyCompilation: true
    }
  })
}
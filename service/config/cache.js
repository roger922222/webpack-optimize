module.exports = (base) => {
  return Object.assign(base, {
    cache: {
        type: 'filesystem'
    },
  })
}
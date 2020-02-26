function getData(arr = [], scale = 100) {
  const item = scale / (arr.length - 1)
  const random = Math.random() * scale
  const index = Math.round(random / item)
  return arr[index]
}

module.exports = {
  getData
}

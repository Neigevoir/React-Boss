import isArray from './isArray'
import isObject from './isObject'
import isString from './isString'

function map(data, callback = () => {}) {
  let arr = []
  if (isArray(data) || isObject(data) || isString(data)) {
    const newArr = isString(data) ? Array.from(data) : data
    for (let key in newArr) {
      arr.push(callback(data[key], key))
    }
    return arr
  } else {
    // NOTE:其他类型参数不做处理
  }
  return []
}

export default map

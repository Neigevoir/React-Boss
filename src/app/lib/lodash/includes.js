import isArray from './isArray'
import isObject from './isObject'
import isString from './isString'

function includes(data, item, index) {
  let hasItem = false
  if (isArray(data)) {
    if (!!index && data[index] === item) {
      return (hasItem = true)
    } else if (!!index && data[index] !== item) {
      return hasItem
    } else {
      for (let i = 0; i < data.length; i++) {
        if (item === data[i]) {
          return (hasItem = true)
        } else {
          hasItem = false
        }
      }
    }
  } else if (isObject(data)) {
    for (let i in data) {
      if (item === data[i]) {
        return (hasItem = true)
      } else {
        hasItem = false
      }
    }
  } else if (isString(data)) {
    hasItem = !!(data.indexOf(item) !== -1)
  }
  return hasItem
}

export default includes

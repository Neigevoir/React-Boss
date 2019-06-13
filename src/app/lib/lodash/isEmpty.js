import isArray from './isArray'
import isObject from './isObject'
import isString from './isString'

function isEmpty(data) {
  let isEmpty = true
  if (isArray(data) || isString(data)) {
    isEmpty = data.length === 0
  } else if (isObject(data)) {
    let objLength = 0
    for (let key in data) {
      objLength += data[key] ? 1 : 0
    }
    isEmpty = objLength === 0
  } else {
  }
  return isEmpty
}

export default isEmpty

import isObject from './isObject'

export default function isEmpty(value) {
  let isEmpty = true
  if (!value) {
    return isEmpty
  }
  if (isObject(value)) {
    for (let key in value) {
      if (value[key]) {
        isEmpty = false
      }
    }
  } else {
    isEmpty = value.length === 0
  }
  return isEmpty
}

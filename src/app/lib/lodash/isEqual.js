import getType from './getType'
import isArray from './isArray'
import isObject from './isObject'
import isNumber from './isNumber'
import isFunction from './isFunction'

function isEqual(value, other) {
  let equal = true
  if (getType(value) !== getType(other)) {
    equal = false
  } else {
    if (isArray(value)) {
      if (value.length !== other.length) {
        equal = false
      } else {
        for (let i = 0; i < value.length; i++) {
          if (!isEqual(value[i], other[i])) {
            equal = false
            break
          }
        }
      }
    } else if (isObject(value)) {
      for (let key in value) {
        if (!isEqual(value[key], other[key])) {
          equal = false
          break
        }
      }
    } else if (isNumber(value)) {
      const isNaN = String(value) === 'NaN' && String(other) === 'NaN'
      equal = isNaN || value === other
    } else if (isFunction(value)) {
      const valueName = value.name
      const otherName = other.name
      equal = valueName !== '' && otherName !== '' && valueName === otherName
    } else {
      equal = value === other
    }
  }
  return equal
}

export default isEqual

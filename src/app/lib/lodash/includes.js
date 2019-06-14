import isArray from './isArray'

function includes(arr, item) {
  if (isArray(arr)) {
    let hasItem = false
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        return (hasItem = true)
      } else {
        hasItem = false
      }
    }
    return hasItem
  }
}

export default includes

import isArray from './isArray'

export default function filter(data, callback = () => {}) {
  if (isArray(data)) {
    let result = []
    for (let key = 0; key < data.length; key++) {
      if (callback(data[key])) {
        result.push(data[key])
      }
    }
    return result
  }
}

/**
 * url add timestamp
 * @param {*string} url
 */

const urlTimestamp = url => {
  const getTimestamp = new Date().getTime()
  return url.indexOf('?') > -1
    ? (url = `${url}&timestamp=${getTimestamp}`)
    : (url = `${url}?timestamp=${getTimestamp}`)
}

export default urlTimestamp

import getType from './getType'

function isString(data) {
  return getType(data) === 'String'
}

export default isString

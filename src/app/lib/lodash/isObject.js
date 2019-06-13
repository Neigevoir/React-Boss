import getType from './getType'

function isObject(data) {
  return getType(data) === 'Object'
}

export default isObject

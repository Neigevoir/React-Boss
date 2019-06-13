import getType from './getType'

function isArray(data) {
  return getType(data) === 'Array'
}

export default isArray

import getType from './getType'

function isFunction(data) {
  return getType(data) === 'Function'
}

export default isFunction

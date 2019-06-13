import getType from './getType'

function isNumber(data) {
  return getType(data) === 'Number'
}

export default isNumber

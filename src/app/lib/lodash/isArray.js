import getType from './getType'

export default function isArray(data) {
  return getType(data) === 'Array'
}

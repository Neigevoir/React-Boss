export default function classnames(...parameters) {
  let names = []
  if (parameters.length > 0) {
    for (let index = 0; index < parameters.length; index++) {
      const param = parameters[index]
      if (typeof param === 'string') {
        names.push(param)
      } else if (typeof param === 'object') {
        for (let i in param) {
          if (typeof param[i] === 'boolean') {
            param[i] === true && names.push(i)
          } else {
            console.warn(`参数中的${i}属性需要设置为boolean类型才能生效!`)
          }
        }
      } else {
        console.warn(`参数支持object和string!`)
      }
    }
  }
  return names.join(' ')
}

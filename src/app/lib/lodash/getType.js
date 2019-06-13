// typeof
// typeof 1 // "number"
// typeof '1' // "string"
// typeof true // "boolean"
// typeof Symbol(1) // "symbol"
// typeof {} // "object"
// typeof [] // "object"，小坑
// typeof function() {} // "function"
// typeof Symbol(1) // "symbol"
// typeof undefined // "undefined"
// typeof null // "object"，出名的坑

// instanceof
// let num = 1
// num instanceof Number // false
// num = new Number(1)
// num instanceof Number // true

// let num = 1
// num.__proto__ === Number.prototype // true
// num instanceof Number // false

// num = new Number(1)
// num.__proto__ === Number.prototype // true
// num instanceof Number // true

// num.__proto__ === (new Number(1)).__proto__ // true

function getType(data) {
  const typeString = Object.prototype.toString.call(data)
  const dataType = typeString.split(' ')[1].split(']')[0]
  return dataType
}

export default getType

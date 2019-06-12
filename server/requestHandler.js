var fs = require('fs')
function start() {
  console.log("Request handler 'start' was called.")
  var str = '{"id":"123",name:"jack",arg:11111}'
  str = fs.readFileSync('data.txt')
  return 'Hello Start'
}

function upload() {
  console.log("Request handler 'upload' was called.")
  return 'Hello Upload'
}

exports.start = start
exports.upload = upload

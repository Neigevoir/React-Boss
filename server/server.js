const http = require('http')
const url = require('url')
// const querystring = require('querystring') //操作参数模块

function start(route, handle) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname
    console.log('收到请求.')
    response.writeHead(200, {
      'Content-Type': 'application/json',
      charset: 'utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
    })
    const content = route(handle, pathname)
    response.write(JSON.stringify(content))
    response.end()
  }

  http.createServer(onRequest).listen(8888)
  console.log('Server has started.')
}

exports.start = start

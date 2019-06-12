// var server = require('./server')
// var router = require('./router')
// var requestHandlers = require('./requestHandler')

// var handle = {}
// handle['/'] = requestHandlers.start
// handle['/start'] = requestHandlers.start
// handle['/upload'] = requestHandlers.upload

// server.start(router.route, handle)

let http = require('http')
let url = require('url')
// let fs = require('fs')
let querystring = require('querystring') //操作参数模块

let str = { id: '1', name: 'zhangSan', age: 30, sex: 'men' }

function onRequest(request, response) {
  let urlStr = url.parse(request.url)
  let param = querystring.parse(urlStr.query)
  console.log('收到请求.')
  response.writeHead(200, {
    'Content-Type': 'application/json',
    charset: 'utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS'
  }) //可以解决跨域的请求
  console.log(param) //输出  { name: '鲁班大师', iq: '250' }
  //str=fs.readFileSync('json.txt');//读取文件内容
  response.write(JSON.stringify(str))
  response.end()
}
http.createServer(onRequest).listen(8888)

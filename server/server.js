const Express = require('express')
const bodyParser = require('body-parser')
const port = require('../src/server_port.js')
const api = require('./api/index')
// const mongoose = require('mongoose')
const app = new Express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const isValidTokenUrls = ['/api/login/login']

const validHeaders = {
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, token',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
  'X-Powered-By': 'Node',
  'Content-Type': 'application/json;charset=utf-8',
  'Cache-Control': 'no-cache8'
}

const setValidHeader = res => {
  for (const key in validHeaders) {
    if (validHeaders.hasOwnProperty(key)) {
      res.header(key, validHeaders[key])
    }
  }
}

app.all('*', (req, res, next) => {
  const { token } = req.headers
  // NOTE：处理是否有带Token，登录接口不需要带
  if (isValidTokenUrls.includes(req.url)) {
    setValidHeader(res)
  } else {
    if (!token && req.method !== 'OPTIONS') {
      res.status(500).send({ error: 'Something Wrong!' })
    } else {
      setValidHeader(res)
    }
  }
  next()
})

app.use('/api', api)

// mongoose.connect(`mongodb://localhost:27017/my_database`, {
//   useNewUrlParser: true
// })

app.listen(port, err => {
  if (err) {
    console.error(err)
  } else {
    console.log('Server has started, Port:' + port)
  }
})

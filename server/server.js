// const path = require('path')
// const https = require('https')
// const url = require('url')
const Express = require('express')
const bodyParser = require('body-parser')
const port = require('../src/server_port.js')
const api = require('./api/index')

const app = new Express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With,Accept,Content-Type'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use('/api', api)

app.listen(port, err => {
  if (err) {
    console.error(err)
  } else {
    console.log('Server has started, Port:' + port)
  }
})

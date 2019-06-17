const express = require('express')
const router = express.Router()
const data = { id: '1', name: 'zhangSan', age: 30, sex: 'men' }
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get('/', function(req, res) {
  res.send(data)
})
router.post('/', function(req, res) {
  res.send(data)
})
// define the home page route
router.get('/list', function(req, res) {
  res.send(data)
})
router.post('/list', function(req, res) {
  // NOTE:可以通过req的各种信息做相对应处理
  console.log(typeof req.body)
  console.log(req.body)
  res.send(data)
})
// define the about route
router.post('/search', function(req, res) {
  res.send(data)
})

module.exports = router

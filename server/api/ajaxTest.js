const express = require('express')
const router = express.Router()

const data = { id: '1', name: '有数据咯！' }
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })
router.get('/', (req, res) => {
  res.send('Error!')
})
router.post('/', (req, res) => {
  res.send('Error!')
})
// define the home page route
let num = 0
router.get('/get', function(req, res, next) {
  if (req.query.id) {
    num = num + 1

    const _callback = req.query.callback
    // 这个responseData是后台要传回给前台的数据
    const responseData = { ...data, id: req.query.id, type: 'get', num }
    if (_callback) {
      // 这两步设置发送也是NODE.JS发送JSONP必备
      res.type('text/javascript')
      res.send(_callback + '(' + JSON.stringify(responseData) + ')')
    } else {
      res.send(responseData)
    }
  } else {
    console.log('error')
    res.status(500).send({
      error: 'ID有问题啊，敲你么！'
    })
  }
})
// define the about route
router.post('/post', function(req, res) {
  console.log(req.body)
  if (req.body.id) {
    res.send({ ...data, id: req.body.id, type: 'post' })
  } else {
    res.status(500).send({
      error: 'ID有问题啊，敲你么！'
    })
  }
})

module.exports = router

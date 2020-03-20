const express = require('express')
const router = express.Router()
const data = { id: '1', name: 'Neigevoir', age: 26, sex: 'men' }
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get('/', (req, res) => {
  res.send(data)
})
router.post('/', (req, res) => {
  res.send(data)
})
// define the home page route
router.get('/list', (req, res) => {
  res.send(data)
})
router.post('/list', (req, res) => {
  // NOTE:可以通过req的各种信息做相对应处理
  console.log(typeof req.body)
  console.log(req.body)
  res.send(data)
})
// define the about route
router.post('/search', (req, res) => {
  res.send(data)
})

module.exports = router

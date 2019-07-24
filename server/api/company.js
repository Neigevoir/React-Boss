const express = require('express')
const router = express.Router()

const data = { id: '2', name: 'company', age: 30, sex: 'men' }
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })
// define the home page route
router.get('/company', function(req, res) {
  res.send(data)
})
// define the about route
router.post('/company', function(req, res) {
  res.send(data)
})

module.exports = router

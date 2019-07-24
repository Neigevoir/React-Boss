const Express = require('express')
const router = Express.Router()

router.get('/', function(req, res) {
  res.send('Index Api!')
})
// define the about route
router.post('/', function(req, res) {
  res.send('Index POST Api!')
})

router.use('/position', require('./position'))
router.use('/company', require('./company'))
router.use('/ajaxTest', require('./ajaxTest'))

module.exports = router

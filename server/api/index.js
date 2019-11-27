const Express = require('express')
const router = Express.Router()

router.use('/position', require('./position'))
router.use('/company', require('./company'))
router.use('/ajaxTest', require('./ajaxTest'))
router.use('/login', require('./login/index'))

module.exports = router

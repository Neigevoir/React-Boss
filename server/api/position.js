const express = require('express')
const router = express.Router()

const positionData = require('../data/position')
const utils = require('../data/utils')

function getDatas(options) {
  const num = options.pageSize || 10
  let datas = []
  for (let index = 0; index < num; index++) {
    datas.push({
      title: utils.getData(positionData.title),
      hr: utils.getData(positionData.hr),
      company: utils.getData(positionData.company),
      companyicon: '',
      scale: utils.getData(positionData.scale),
      area: options.area || utils.getData(positionData.area),
      time: utils.getData(positionData.time),
      education: utils.getData(positionData.education),
      money: utils.getData(positionData.money)
    })
  }
  return datas
}

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get('/', (req, res) => {
  const data = getDatas()
  res.send(data)
})
router.post('/', (req, res) => {
  const data = getDatas()
  res.send(data)
})
// define the home page route
router.get('/list', (req, res) => {
  const data = getDatas()
  res.send(data)
})
router.post('/list', (req, res) => {
  // NOTE:可以通过req的各种信息做相对应处理
  console.log(req.body)
  const { filter } = req.body
  const data = getDatas(filter)

  res.send(data)
})
// define the about route
router.post('/search', (req, res) => {
  const data = getDatas()
  res.send(data)
})

module.exports = router

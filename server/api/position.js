const express = require('express')
const router = express.Router()
const data = [
  {
    title: '前端工程师',
    hr: '陈老师',
    company: '腾讯科技',
    companyicon: '',
    scale: 'D',
    area: '深圳',
    time: '3-5',
    education: '本科',
    money: '10-20'
  },
  {
    title: '后端工程师',
    hr: '孙老师',
    company: '莱尔托特',
    companyicon: '',
    scale: 'A',
    area: '深圳',
    time: '1-3',
    education: '本科',
    money: '15-25'
  }
]
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

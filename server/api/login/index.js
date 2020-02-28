const express = require('express')
const router = express.Router()
// const Token = require('./token')
const userInfoData = {
  id: '1',
  name: 'Neigevoir',
  age: 25,
  sex: 'men'
}

let userLoginData = {
  phone: '13828477648',
  password: 'qaz123'
}

let token = null

const randomString = () =>
  Math.random()
    .toString(36)
    .substring(7)
    .split('')
    .join('.')

const createToken = () => {
  return new Date().getTime() + '&' + randomString()
}

router.post('/login', (req, res) => {
  const { phone, password } = req.body
  let resData = null
  if (phone !== userLoginData.phone) {
    resData = {
      error: '请输入正确的手机号！'
    }
  } else if (password !== userLoginData.password) {
    resData = {
      error: '请输入正确的密码！'
    }
  } else {
    if (token) {
      resData = {
        error: '请勿重复登录！'
      }
    } else {
      token = createToken()
      resData = {
        token
      }
    }
  }
  res.send(resData)
})

router.post('/changepsd', (req, res) => {
  const { phone, password } = req.body
  let resData = null
  if (phone !== userLoginData.phone) {
    resData = {
      error: '请输入正确的手机号！'
    }
  } else if (password !== userLoginData.password) {
    resData = {
      error: '请输入正确的密码！'
    }
  } else {
    userLoginData = {
      phone,
      password
    }
  }
  res.send(resData)
})

router.post('/getUserInfo', (req, res) => {
  let resData = null
  if (!token && !req.headers.token) {
    resData = {
      data: null,
      error: '请先登录！'
    }
  } else {
    resData = userInfoData
  }
  res.send(resData)
})

module.exports = router

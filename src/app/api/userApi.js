import Fetch from '../utils/fetch'

let userApi = {
  getUserVerify(data) {
    return Fetch({
      type: 'POST',
      url: '/app/user/password',
      data: {
        phone: data.phone,
        code: data.code,
        password: data.code
      }
    })
  },

  getLoginOut() {
    return Fetch({
      type: 'POST',
      mode: 'cors',
      url: '/app/user/logout'
    })
  },

  getUserLogin(data) {
    return Fetch({
      type: 'POST',
      url: '/app/user/login',
      data: {
        username: data.username,
        password: data.password
      }
    })
  },

  getUserCode({ phone, type = 'forget' }) {
    return Fetch({
      type: 'POST',
      mode: 'cors',
      url: '/app/sms/send',
      data: {
        phone: phone,
        type: type
      }
    })
  },

  getLoginInfo() {
    return Fetch({
      type: 'POST',
      mode: 'cors',
      url: '/app/user/logininfo'
    })
  },

  getChangePassword({ oldpsd, newpsd }) {
    return Fetch({
      type: 'POST',
      mode: 'cors',
      url: '/app/user/editpassword',
      data: {
        old_password: oldpsd,
        new_password: newpsd
      }
    })
  },

  getUserFollow({ uid }) {
    return Fetch({
      type: 'POST',
      mode: 'cors',
      url: '/app/user/follow',
      data: {
        uid: uid
      }
    })
  },

  getUserShow({ nid }) {
    return Fetch({
      type: 'POST',
      mode: 'cors',
      url: '/app/vxwork/show',
      data: {
        nid: nid
      }
    })
  },

  getUserFans({ type = 'fans' }) {
    return Fetch({
      type: 'POST',
      mode: 'cors',
      url: '/app/user/list',
      data: {
        type: type
      }
    })
  }
}

export default userApi

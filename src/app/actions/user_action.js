import api from '../api/userApi'
import constant from '../constants/user'

const getUserLogin = (data, success) => {
  return {
    type: constant.GET_UserLogin,
    API: true,
    method: 'POST',
    url: '/api/login/login',
    data,
    success
  }
}

const getUserCode = data => {
  return dispatch => {
    return api.getUserCode(data).then(res => {
      dispatch({ type: constant.GET_LINEPOSITION, res })
    })
  }
}

const getUserVerify = data => {
  return dispatch => {
    return api.getUserVerify(data).then(res => {
      dispatch({ type: constant.GET_LINEPOSITION, res })
    })
  }
}

const getLoginInfo = (success, error) => {
  return {
    type: 'API:LOGININFO:GET',
    API: true,
    method: 'POST',
    url: '/app/user/logininfo',
    success,
    error
  }
}

const getLoginOut = () => {
  return dispatch => {
    return api.getLoginOut().then(res => {
      dispatch({ type: constant.GET_LINEPOSITION, res })
    })
  }
}

const getChangePassword = data => {
  return dispatch => {
    return api.getChangePassword(data).then(res => {
      dispatch({ type: constant.GET_LINEPOSITION, res })
    })
  }
}

const getUserFollow = data => {
  return dispatch => {
    return api.getUserFollow(data).then(res => {
      dispatch({ type: constant.GET_LINEPOSITION, res })
    })
  }
}

const getUserShow = data => {
  return dispatch => {
    return api.getUserShow(data).then(res => {
      dispatch({ type: constant.GET_LINEPOSITION, res })
    })
  }
}

const getUserFans = data => {
  return dispatch => {
    return api.getUserFans(data).then(res => {
      dispatch({ type: constant.GET_LINEPOSITION, res })
    })
  }
}

export default {
  getUserFans,
  getUserShow,
  getUserFollow,
  getChangePassword,
  getLoginOut,
  getLoginInfo,
  getUserVerify,
  getUserCode,
  getUserLogin
}

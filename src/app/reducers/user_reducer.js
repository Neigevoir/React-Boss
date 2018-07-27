import { combineReducers } from 'redux'
import constant from '../constants/user'

function User(state = null, action) {
  switch (action.type) {
    case constant.GET_UserVerify:
      return Object.assign({}, state, {
        userData: action.res,
        userType: action.usertype
      })
    case constant.GET_UserLogin:
      return Object.assign({}, state, {
        positiondata: action.res,
        positiontype: action.usertype
      })
    case constant.GET_UserCode:
      return Object.assign({}, state, {
        userData: action.res,
        userType: action.usertype
      })
    case constant.GET_UserRegisters:
      return Object.assign({}, state, {
        userData: action.res,
        userType: action.usertype
      })
    case constant.GET_LoginInfo:
      return Object.assign({}, state, {
        userData: action.res,
        userType: action.usertype
      })
    case constant.GET_CHANGEPASSWORD:
      return Object.assign({}, state, {
        userData: action.res,
        userType: action.usertype
      })
    case constant.GET_USERFOLLOW:
      return Object.assign({}, state, {
        userData: action.res,
        userType: action.usertype
      })
    case constant.GET_USERSHOW:
      return Object.assign({}, state, {
        userData: action.res,
        userType: action.usertype
      })
    case constant.GET_USERFANS:
      return Object.assign({}, state, {
        userData: action.res,
        userType: action.usertype
      })
    case constant.GET_LoginOut:
      return Object.assign({}, state, {
        userData: action.res,
        userType: action.usertype
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  User
})

export default todoApp

import { combineReducers } from 'redux'
import constant from '../constants/information'
import FetchingConstant from '../constants/fetching'

function InformationData(state = null, action) {
  switch (action.type) {
    case constant.GET_PRIVATEMESSAGELIST:
      return action.res
      break
    case constant.GET_PERSONINFO:
      return Object.assign({}, state, {
        InformationData: action.res,
        InformationType: action.informationType
      })
      break
    case constant.GET_PRIVATEMESSAGEPAGE:
      return Object.assign({}, state, {
        InformationData: action.res,
        InformationType: action.informationType
      })
      break
    default:
      return state
  }
}

function InformationType(state = null, action) {
  switch (action.type) {
    case constant.SHOW_COMPANYDETAIL:
      return action.companyDetailtype
      break
    case constant.GET_PRIVATEMESSAGEPAGE:
      return Object.assign({}, state, {
        InformationData: action.res,
        InformationType: action.informationType
      })
      break
    case FetchingConstant.FETCHING_POSTING:
      return FetchingConstant.FETCHING_POSTING
      break
    case FetchingConstant.FETCHING_DIDPOSIS:
      return FetchingConstant.FETCHING_DIDPOSIS
      break
    default:
      return state
  }
}

const todoApp = combineReducers({
  InformationData,
  InformationType
})

export default todoApp

import { combineReducers } from 'redux'
import constant from '../constants/information'
import FetchingConstant from '../constants/fetching'

function InformationData(state = null, action) {
  switch (action.type) {
    case constant.GET_PRIVATEMESSAGELIST:
      return action.res
    case constant.GET_PERSONINFO:
      return {
        ...state,
        InformationData: action.res,
        InformationType: action.informationType
      }
    case constant.GET_PRIVATEMESSAGEPAGE:
      return Object.assign({}, state, {
        InformationData: action.res,
        InformationType: action.informationType
      })
    default:
      return state
  }
}

function InformationType(state = null, action) {
  switch (action.type) {
    case constant.SHOW_COMPANYDETAIL:
      return action.companyDetailtype
    case constant.GET_PRIVATEMESSAGEPAGE:
      return Object.assign({}, state, {
        InformationData: action.res,
        InformationType: action.informationType
      })
    case FetchingConstant.FETCHING_POSTING:
      return FetchingConstant.FETCHING_POSTING
    case FetchingConstant.FETCHING_DIDPOSIS:
      return FetchingConstant.FETCHING_DIDPOSIS
    default:
      return state
  }
}

const todoApp = combineReducers({
  InformationData,
  InformationType
})

export default todoApp

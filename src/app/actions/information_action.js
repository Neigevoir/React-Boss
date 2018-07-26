import api from '../api/informationApi'
import FetchAction from './FetchAction'
import constant from '../constants/information'

const getPrivateMessageList = (data, informationType) => {
  return dispatch => {
    dispatch(FetchAction.FetchPosts())
    return api.getPrivateMessageList(data).then(res => {
      dispatch(FetchAction.DidPosts())
      dispatch({ type: constant.GET_PRIVATEMESSAGELIST, res, informationType })
    })
  }
}

const getPersonInfo = (data, informationType) => {
  return dispatch => {
    return api.getPersonInfo(data).then(res => {
      dispatch({ type: constant.GET_PERSONINFO, res })
    })
  }
}

const getPrivateMessagePage = companyDetailtype => {
  return dispatch => {
    return api.getPrivateMessagePage().then(res => {
      dispatch({ type: constant.GET_PRIVATEMESSAGEPAGE, res })
    })
  }
}

export default {
  getPrivateMessageList,
  getPersonInfo,
  getPrivateMessagePage
}

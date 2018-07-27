import api from '../api/noticeApi'
import FetchAction from './fetch_action'
import constant from '../constants/notice'

const getNotice = (data, type) => {
  return dispatch => {
    dispatch(FetchAction.FetchPosts())
    return api.getNotice(data).then(res => {
      dispatch(FetchAction.ResData(constant.GET_NOTICEDATA, res, type))
    })
  }
}

export default {
  getNotice
}

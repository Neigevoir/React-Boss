import api from '../api/noticeApi'
import constant from '../constants/notice'

const getNotice = (data, type) => {
  return dispatch => {
    return api.getNotice(data).then(res => {
      dispatch({ type: constant.GET_NOTICEDATA, res })
    })
  }
}

export default {
  getNotice
}

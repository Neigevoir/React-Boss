import api from 'src/app/api/positionApi.js'
import constant from 'src/app/constants/position.js'

const getLinePosition = (data, usertype) => {
  return dispatch => {
    return api.getLinePosition(data).then(res => {
      dispatch({ type: constant.GET_LINEPOSITION, res, usertype })
    })
  }
}

const getSearchList = data => {
  return dispatch => {
    return api.getSearchList(data).then(res => {
      dispatch({ type: constant.GET_SEARCHLIST, res })
    })
  }
}

export default {
  getLinePosition,
  getSearchList
}

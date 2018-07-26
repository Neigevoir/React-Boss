import api from 'src/app/api/positionApi.js'
import constant from 'src/app/constants/position.js'

let PositionAction = {
  getLinePosition(data, type) {
    return dispatch => {
      return api.getLinePosition(data).then(res => {
        dispatch(PositionAction.notic(constant.GET_LINEPOSITION, res, type))
      })
    }
  },

  getSearchList(data) {
    return dispatch => {
      return api.getSearchList(data).then(res => {
        dispatch(PositionAction.notic(constant.GET_SEARCHLIST, res))
      })
    }
  },

  notic(type, res, usertype) {
    return { type: type, res, usertype }
  }
}

export default PositionAction

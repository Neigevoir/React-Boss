import api from 'src/app/api/positionApi.js'
import constant from 'src/app/constants/position.js'

const setFilters = filters => ({
  type: 'POSITION:SET_FILTERS',
  filters
})

const getLinePosition = (data, success, error) => {
  return {
    type: 'API:GetLinePosition',
    API: true,
    method: 'POST',
    url: 'http://localhost:8888/api/position/list',
    data,
    success: success,
    error: error
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
  getSearchList,
  setFilters
}

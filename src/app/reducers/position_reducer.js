import constant from '../constants/position'

const initialState = {
  type: '',
  list: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case constant.GET_LINEPOSITION:
      return {
        type: action.usertype,
        list: [...state.list, ...action.res.data]
      }
    case constant.GET_SEARCHLIST:
      return {
        type: action.usertype,
        list: [...state.list, ...action.res.data]
      }
    default:
      return state
  }
}

export default reducer

import constant from '../constants/notice'

const initialState = {
  list: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case constant.GET_NOTICEDATA:
      console.log(action)
      return state
    default:
      return state
  }
}

export default reducer

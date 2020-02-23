import constant from '../constants/position'

const initialState = {
  filters: {
    offset: 0,
    num: 16,
    fid: 0,
    uid: 0,
    like: 0,
    type: 'recommend'
  },
  sort: 'recommend',
  list: []
}

const handleList = (state, action) => {
  return {
    filters: state.filters,
    listType: action.listType,
    list: action.response
  }
}

const handleFilters = (state, action) => {
  return { ...state, filters: action.filters }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case `${constant.GET_LINEPOSITION}:SUCCESS`:
      return handleList(state, action)
    case constant.GET_SEARCHLIST:
      return handleList(state, action)
    case 'POSITION:SET_FILTERS':
      return handleFilters(state, action)
    default:
      return state
  }
}

export default reducer

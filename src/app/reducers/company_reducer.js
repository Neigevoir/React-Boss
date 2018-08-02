import constant from '../constants/company'

const initialState = {
  filters: {
    offset: 0,
    num: 16,
    fid: 0,
    uid: 0,
    like: 0,
    type: 'recommend'
  },
  list: []
}

const handleList = (state, action) => {
  return {
    filters: state.filters,
    listType: action.listType,
    list:
      state.filters.type === action.usertype
        ? [...state.list, ...action.res.data]
        : action.res.data
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case constant.GET_COMPANYLINELIST:
      return handleList(state, action)
    case constant.GET_COMPANYDETAIL:
      return handleList(state, action)
    default:
      return state
  }
}

export default reducer

const initialState = {
  list: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'API:GET_NOTICE:SUCCESS':
      return { ...state, list: [...action.response.data.message] }
    default:
      return state
  }
}

export default reducer

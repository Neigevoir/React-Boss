const initialState = {
  uid: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'API:LOGININFO:GET:SUCCESS':
      return { ...state, ...action.response.data }
    default:
      return state
  }
}

export default reducer

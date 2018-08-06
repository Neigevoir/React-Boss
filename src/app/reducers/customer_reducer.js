const initialState = {
  id: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET:CUSTOMER':
      return { ...state, ...action.footer }
    default:
      return state
  }
}

export default reducer

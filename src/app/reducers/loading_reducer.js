const initialState = {
  isShow: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COMMOM:SET_LOADING':
      return { ...state, ...action.loading }
    default:
      return state
  }
}

export default reducer

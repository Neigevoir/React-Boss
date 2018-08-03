const initialState = {
  isShow: true
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FOOTER:SET_FOOTER':
      return { ...state, ...action.footer }
    default:
      return state
  }
}

export default reducer

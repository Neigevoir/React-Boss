const initialState = {
  isShow: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COMMOM:LOADING':
      return {
        isShow: action.isShow
      }
    default:
      return state
  }
}

export default reducer

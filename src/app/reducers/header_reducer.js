const initialState = {
  isShow: true,
  title: '',
  leftBtn: '',
  handleLeft: () => {},
  rightBtn: '',
  handleRight: () => {},
  opacity: 1
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HEADER:SET_HEADER':
      return { ...state, ...action.header }
    default:
      return state
  }
}

export default reducer

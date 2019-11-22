const initialState = {
  header: {
    isShow: true,
    title: '',
    leftBtn: '',
    handleLeft: () => {},
    rightBtn: '',
    handleRight: () => {},
    opacity: 1
  },
  footer: true,
  toast: {
    isShow: false,
    content: '',
    timer: 3,
    type: 'warning',
    image: null
  },
  tips: {
    isShow: false,
    content: '',
    time: 3,
    image: ''
  },
  loading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING:SET_LOADING':
      return { ...state, ...action.response.data }
    case 'FOOTER:SET_FOOTER':
      return { ...state, ...action.response.data }
    case 'HEADER:SET_HEADER':
      return { ...state, header: { ...state.header, ...action.data } }
    case 'TIPS:SET_TIPS':
      return { ...state, ...action.response.data }
    case 'NAV:FOOTER:ENABLE':
      return { ...state, footer: true }
    case 'NAV:FOOTER:DISABLE':
      return { ...state, footer: false }
    case 'TIPS:RESET_TIPS':
      return { ...state, tips: initialState.tips }
    default:
      return state
  }
}

export default reducer

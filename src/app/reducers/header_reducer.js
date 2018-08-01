const initialState = {
  isShow: false,
  content: '',
  timer: 3
}

const changeTips = (state, action) => {
  return _.extend({}, initialState, action.data)
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TIPS:CHANGETIP':
      return changeTips(state, action)
    default:
      return state
  }
}

export default reducer

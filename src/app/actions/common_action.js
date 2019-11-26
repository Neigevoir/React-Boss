const changeHeader = filter => {
  return {
    type: 'HEADER:SET_HEADER',
    data: filter
  }
}

const enableFooter = () => {
  return {
    type: 'NAV:FOOTER:ENABLE'
  }
}

const disableFooter = () => {
  return {
    type: 'NAV:FOOTER:DISABLE'
  }
}

const changeLoading = loading => ({
  type: 'LOADING:SET_LOADING',
  loading
})

const changeTips = tips => ({
  type: 'TIPS:SET_TIPS',
  tips
})

const resetTips = footer => ({
  type: 'TIPS:RESET_TIPS'
})

export default {
  changeHeader,
  enableFooter,
  disableFooter,
  changeLoading,
  changeTips,
  resetTips
}

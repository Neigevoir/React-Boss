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

const changeTips = footer => ({
  type: 'TIPS:SET_TIPS',
  footer
})

const resetTips = footer => ({
  type: 'TIPS:RESET_TIPS',
  footer
})

export default {
  changeHeader,
  enableFooter,
  disableFooter,
  changeLoading,
  changeTips,
  resetTips
}

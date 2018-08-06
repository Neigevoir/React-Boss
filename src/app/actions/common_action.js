const changeHeader = header => ({
  type: 'HEADER:SET_HEADER',
  header
})

const changeFooter = footer => ({
  type: 'FOOTER:SET_FOOTER',
  footer
})

const changeLoading = footer => ({
  type: 'FOOTER:SET_LOADING',
  footer
})

export default {
  changeHeader,
  changeFooter,
  changeLoading
}
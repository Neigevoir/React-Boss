const changeHeader = header => ({
  type: 'HEADER:SET_HEADER',
  header
})

const changeFooter = footer => ({
  type: 'FOOTER:SET_FOOTER',
  footer
})

export default {
  changeHeader,
  changeFooter
}

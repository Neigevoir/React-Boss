export default (rate = 2) => event => {
  const doc = document.body.scrollTop ? document.body : document.documentElement
  let scrollTop = doc.scrollTop
  const top = function() {
    scrollTop = scrollTop + (0 - scrollTop) / rate
    if (scrollTop < 1) {
      doc.scrollTop = 0
      return null
    }
    doc.scrollTop = scrollTop
    requestAnimationFrame(top)
  }
  top()
}

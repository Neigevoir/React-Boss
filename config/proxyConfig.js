module.exports = {
  proxy: {
    '/app/*': {
      target: 'http://www.ih5.cn',
      changeOrigin: true,
      // host:'localhost:3000',
      secure: false
    }
  }
}

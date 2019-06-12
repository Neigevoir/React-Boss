module.exports = {
  proxy: {
    '/app/*': {
      target: 'http://localhost:8888',
      changeOrigin: true,
      // host:'localhost:3000',
      secure: false
    }
  }
}

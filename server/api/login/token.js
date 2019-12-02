class Token {
  constructor() {
    super()
    this.token = null
    this.randomString = this.randomString.bind(this)
    this.createToken = this.createToken.bind(this)
    this.getToken = this.getToken.bind(this)
    this.setToken = this.setToken.bind(this)
  }

  randomString() {
    return Math.random()
      .toString(36)
      .substring(7)
      .split('')
      .join('.')
  }

  createToken() {
    return new Date().getTime() + '&' + this.randomString()
  }

  getToken() {
    return this.token
  }

  setToken(token) {
    this.token = token
  }
}

module.exports = Token

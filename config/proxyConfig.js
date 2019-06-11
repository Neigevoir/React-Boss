module.exports = {
  proxy: {
    '/api': {
      target: 'https://wechat-dev.letote.cn',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true,
      protocolRewrite: 'https',
      cookieDomainRewrite: {
        '*': 'localhost'
      },
      auth: 'ltjv:pxltEZq9RNdiOqk'
    },
    '/hps': {
      target: 'https://wechat-dev.letote.cn',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true,
      protocolRewrite: 'https',
      cookieDomainRewrite: {
        '*': 'localhost'
      }
    },
    '/market': {
      target: 'https://wechat-dev.letote.cn',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true,
      protocolRewrite: 'https',
      cookieDomainRewrite: {
        '*': 'localhost'
      }
    },
    '/wechat': {
      target: 'https://staging.letote.cn',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true,
      protocolRewrite: 'https',
      cookieDomainRewrite: {
        '*': 'localhost'
      }
    },
    '/test': {
      target: 'http://192.168.199.103:3000',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true,
      cookieDomainRewrite: {
        '*': 'localhost'
      }
    },
    '/sf': {
      target: 'https://wechat-dev.letote.cn',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true,
      protocolRewrite: 'https',
      cookieDomainRewrite: {
        '*': 'localhost'
      }
    },
    '/promo/config': {
      target: 'https://wechat-dev.letote.cn',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true,
      protocolRewrite: 'https',
      cookieDomainRewrite: {
        '*': 'localhost'
      }
    },
    '/profile': {
      target: 'https://wechat-staging1.letote.cn',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true,
      protocolRewrite: 'https',
      cookieDomainRewrite: {
        '*': 'localhost'
      }
    },
    '/config': {
      target: 'https://wechat-dev.letote.cn',
      secure: false,
      changeOrigin: true,
      preserveHeaderKeyCase: true,
      hostRewrite: true,
      autoRewrite: true,
      protocolRewrite: 'https',
      cookieDomainRewrite: {
        '*': 'localhost'
      }
    }
  }
}

const deviceType = () => {
  const userAgent = navigator.userAgent,
    isAndroid =
      userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1, //android终端
    isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    isIphoneX =
      /iphone/gi.test(navigator.userAgent) &&
      (window.screen.height === 812 && window.screen.width === 375)
  return {
    isAndroid,
    isiOS,
    isIphoneX
  }
}

export default deviceType

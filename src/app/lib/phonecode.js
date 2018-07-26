//手机号验证
function regExpPhone(phone) {
  const regex = new RegExp(/^1[3456789]\d{9}$/)
  return regex.test(phone)
}

export default {
  regExpPhone
}

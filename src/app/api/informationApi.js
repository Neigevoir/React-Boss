import Fetch from '../utils/fetch'

let InformationApi = {
  MessageStatistic() {
    return Fetch({
      type: 'POST',
      url: '/app/message/statistic',
      mode: 'cors'
    })
  },

  getPrivateMessageList() {
    return Fetch({
      type: 'POST',
      url: '/app/message/privateMessageList',
      mode: 'cors'
    })
  },

  getPersonInfo({ message = 'Test', uid = 640 }) {
    return Fetch({
      type: 'POST',
      url: '/app/message/send',
      mode: 'cors',
      data: {
        message: message,
        uid: uid
      }
    })
  },

  getPrivateMessagePage({ uid = '27108', offset = '0', num = '99' }) {
    return Fetch({
      type: 'POST',
      url: '/app/message/privateMessagePage',
      mode: 'cors',
      data: {
        uid: uid,
        offset: offset,
        num: num
      }
    })
  }
}

module.exports = InformationApi

import Fetch from 'src/app/utils/fetch.js'

let noticeApi = {
  getNotice() {
    return Fetch({
      type: 'POST',
      url: '/app/message/list',
      mode: 'cors',
      data: {
        offset: '0',
        num: '99'
      }
    })
  }
}

export default noticeApi

import Fetch from '../utils/fetch'

let PositionApi = {
  getLinePosition({ offset = 0, num = 16, fid = 0, uid = 0, like = 0, type }) {
    return Fetch({
      type: 'POST',
      url: '/app/vxwork/list',
      mode: 'cors',
      data: {
        offset,
        num,
        fid,
        uid,
        like,
        type
      }
    })
  },

  getSearchList({ num = 18, type = '', offset = 0, keyword = '' }) {
    if (!keyword) {
      console.log('没有KYES！')
      return
    }
    return Fetch({
      type: 'POST',
      url: '/app/vxwork/search',
      mode: 'cors',
      data: {
        num,
        offset,
        type,
        keyword
      }
    })
  }
}

export default PositionApi

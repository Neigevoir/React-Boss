import Fetch from '../utils/fetch'

let LineDataApi = {
  getLineData() {
    return Fetch({
      type: 'POST',
      url: '/app/vxwork/list',
      dataType: 'json',
      data: {
        offset: 0,
        num: 16,
        fid: 0,
        uid: 0,
        like: 0,
        type: 'recommend'
      }
    })
  }
}

module.exports = LineDataApi

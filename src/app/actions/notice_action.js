const getNotice = (data, success, error) => {
  return {
    type: 'API:GET_NOTICE',
    API: true,
    method: 'POST',
    url: '/app/message/list',
    data,
    success,
    error
  }
}

export default {
  getNotice
}

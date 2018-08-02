import api from '../api/companyApi'
import constant from '../constants/company'

const getCompanyLineList = (data, companytype) => {
  return dispatch => {
    return api.getCompanyLineList(data).then(res => {
      dispatch({
        type: constant.GET_COMPANYLINELIST,
        res,
        companytype
      })
    })
  }
}

const getCompanyDetail = (data, companytype) => {
  return dispatch => {
    return api.getCompanyDetail(data).then(res => {
      dispatch({
        type: constant.GET_COMPANYDETAIL,
        res,
        companytype
      })
    })
  }
}

export default {
  getCompanyLineList,
  getCompanyDetail
}

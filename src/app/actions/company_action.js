import api from '../api/companyApi'
import FetchAction from './FetchAction'
import constant from '../constants/company'

const getCompanyLineList = (data, companytype) => {
  return dispatch => {
    dispatch(FetchAction.FetchPosts())
    return api.getCompanyLineList(data).then(res => {
      dispatch(
        FetchAction.ResData(constant.GET_COMPANYLINELIST, res, companytype)
      )
    })
  }
}

const getCompanyDetail = (data, companytype) => {
  return dispatch => {
    dispatch(FetchAction.FetchPosts())
    return api.getCompanyDetail(data).then(res => {
      dispatch(
        FetchAction.ResData(constant.GET_COMPANYDETAIL, res, companytype)
      )
    })
  }
}

export default {
  getCompanyLineList,
  getCompanyDetail
}

import api from '../api/companyApi'
import FetchAction from './FetchAction'
import constant from '../constants/company'

let CompanyAction = {

    getCompanyLineList(data,companytype) {
        return dispatch =>　{
            dispatch(FetchAction.FetchPosts());
            return api.getCompanyLineList(data).then((res)=>{
                dispatch(FetchAction.ResData(constant.GET_COMPANYLINELIST,res,companytype));
            })
        }
    },

    getCompanyDetail(data,companytype) {
        return dispatch =>  {
            dispatch(FetchAction.FetchPosts());
            return api.getCompanyDetail(data).then((res)=>{
                dispatch(FetchAction.ResData(constant.GET_COMPANYDETAIL,res,companytype));
            })
        }
    },

    changeCompanyDetail(companyDetailtype) {
        return { type:constant.SHOW_COMPANYDETAIL,companyDetailtype }
    }

}

module.exports = CompanyAction;

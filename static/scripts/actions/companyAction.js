import api from '../api/companyApi'
import constant from '../constants/company'

let CompanyAction = {

    getCompanyLineList(data,companytype) {
        return dispatch =>　{
            return api.getCompanyLineList(data).then((res)=>{
                dispatch(CompanyAction.notic(constant.GET_COMPANYLINELIST,res,companytype));
            })
        }
    },

    getCompanyDetail(data,companytype) {
        return dispatch =>　{
            return api.getCompanyDetail(data).then((res)=>{
                dispatch(notic(constant.GET_COMPANYDETAIL,res,companytype));
            })
        }
    },

    changeCompanyDetail(companyDetailtype) {
        return  { type:constant.SHOW_COMPANYDETAIL,companyDetailtype }
    },

    notic(type,res,companytype){
        return  { type:type, res ,companytype }
    }

}

module.exports = CompanyAction;

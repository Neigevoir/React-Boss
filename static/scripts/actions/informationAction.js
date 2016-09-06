import api from '../api/companyApi'
import constant from '../constants/informatioin'

let InformationAction = {

    getPrivateMessageList(data,companytype) {
        return dispatch =>　{
            return api.getPrivateMessageList(data).then((res)=>{
                dispatch(InformationAction.notic(constant.GET_COMPANYLINELIST,res,companytype));
            })
        }
    },

    getPersonInfo(data,companytype) {
        return dispatch =>　{
            return api.getPersonInfo(data).then((res)=>{
                dispatch(notic(constant.GET_COMPANYDETAIL,res,companytype));
            })
        }
    },

    getPrivateMessagePage(companyDetailtype) {
        return dispatch =>　{
            return api.getPrivateMessagePage(data).then((res)=>{
                dispatch(notic(constant.GET_COMPANYDETAIL,res,companytype));
            })
        }
    },

    notic(type,res,companytype){
        return  { type:type, res ,companytype }
    }

}

module.exports = InformationAction;

import api from '../api/informationApi'
import constant from '../constants/information'

let InformationAction = {

    getPrivateMessageList(data,informationType) {
        return dispatch =>　{
            return api.getPrivateMessageList(data).then((res)=>{
                dispatch(InformationAction.notic(constant.GET_PRIVATEMESSAGELIST,res,informationType));
            })
        }
    },

    getPersonInfo(data,informationType) {
        return dispatch =>　{
            return api.getPersonInfo(data).then((res)=>{
                dispatch(notic(constant.GET_PERSONINFO,res,informationType));
            })
        }
    },

    getPrivateMessagePage(companyDetailtype) {
        return dispatch =>　{
            return api.getPrivateMessagePage(data).then((res)=>{
                dispatch(notic(constant.GET_PRIVATEMESSAGEPAGE,res,informationType));
            })
        }
    },

    notic(type,res,informationType){
        return  { type:type, res ,informationType }
    }

}

module.exports = InformationAction;

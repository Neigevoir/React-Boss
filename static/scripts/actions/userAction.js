import api from '../api/userApi'
import constant from '../constants/user'

let UserAction = {

    getUserLogin(data){
        return dispatch =>　{
            return api.getUserLogin(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
	},

	getUserCode(data){
        return dispatch =>　{
            return api.getUserCode(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
	},

	getUserVerify(data){
        return dispatch =>　{
            return api.getUserVerify(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
	},

	getLoginInfo(){
        return dispatch =>　{
            return api.getLoginInfo(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
	},

	getLoginOut(){
        return dispatch =>　{
            return api.getLoginOut(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
	},

	getChangePassword(data){
        return dispatch =>　{
            return api.getChangePassword(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
	},

	getUserFollow(data){
        return dispatch =>　{
            return api.getUserFollow(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
	},

	getUserShow(data){
        return dispatch =>　{
            return api.getUserShow(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
	},

	getUserFans(data){
        return dispatch =>　{
            return api.getUserFans(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
	},

    notic(type,res,usertype){
        return  { type:type, res ,usertype }
    }

}

module.exports = UserAction;

import api from '../api/positionApi'
import constant from '../constants/position'

let PositionAction = {

    getLinePosition(data,type) {
        return dispatch =>　{
            return api.getLinePosition(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_LINEPOSITION,res,type));
            })
        }
    },

    getSearchList(data) {
        return dispatch =>　{
            return api.getSearchList(data).then((res)=>{
                dispatch(PositionAction.notic(constant.GET_SEARCHLIST,res));
            })
        }
    },

    notic(type,res,usertype){
        return  { type:type, res ,usertype }
    }

}

module.exports = PositionAction;

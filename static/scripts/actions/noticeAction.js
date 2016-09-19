import api from '../api/noticeApi'
import FetchAction from './FetchAction'
import constant from '../constants/notice'

let NoticeAction = {

    getNotice(data,type) {
        return dispatch =>　{
            dispatch(FetchAction.FetchPosts());
            return api.getNotice(data).then((res)=>{
                dispatch(FetchAction.ResData(constant.GET_NOTICEDATA,res,type));
            })
        }
    }

}

module.exports = NoticeAction;

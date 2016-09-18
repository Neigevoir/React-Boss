import api from '../api/noticeApi'
import constant from '../constants/notice'

let NoticeAction = {

    getNotice(data,type) {
        return dispatch =>　{
            dispatch(NoticeAction.FetchPosts());
            return api.getNotice(data).then((res)=>{
                dispatch(NoticeAction.notic(constant.GET_NOTICEDATA,res,type));
            })
        }
    },

    WillPosts(){
        return { type:'will' }
    },

    FetchPosts(){
        return { type:'Fetching' }
    },

    DidPosts(){
        return { type:'Did' }
    },

    notic(type,res,noticeType){
        return  { type:type, res ,noticeType }
    }

}

module.exports = NoticeAction;

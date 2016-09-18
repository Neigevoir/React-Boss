import Fetch from '../utils/fetch'

let noticeApi = {

    getNotice(){
        return Fetch({
            type:'POST',
            url:__Url__+"/app/message/list",
            mode:"cors",
            data:{
                offset:"0",
                num:"99"
            }
        })
    }

}

module.exports = noticeApi;

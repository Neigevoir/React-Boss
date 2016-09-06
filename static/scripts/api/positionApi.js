import Fetch from '../utils/fetch'

let PositionApi = {

    getLinePosition({offset=0,num=16,fid=0,uid=0,like=0,type}){
        return Fetch({
            type:'POST',
            url:__Url__+'/app/vxwork/list',
            mode:"cors",
            data:{
                offset:offset,
                num:num,
                fid:fid,
                uid:uid,
                like:like,
                type:type
            }
        })
    },

    getSearchList({num=18,type="",offset=0,keyword=""}){
        if (!keyword) {
            console.log("没有KYES！");
            return
        };
        return Fetch({
            type:'POST',
            url:__Url__+'/app/vxwork/search',
            mode:"cors",
            data:{
                num:num,
                offset:offset,
                type:type,
                keyword:keyword
            }
        })
    }
}

module.exports = PositionApi;

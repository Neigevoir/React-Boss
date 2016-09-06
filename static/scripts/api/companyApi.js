import Fetch from '../utils/fetch'

let companyApi = {

    getCompanyLineList({offset=0,num=16,fid=0,uid=0,like=0,type}){
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

    getCompanyDetail({offset=0,num=16,fid=0,uid=0,type,published=1}){
        return Fetch({
            type:'POST',
            url:__Url__+'/app/vxwork/list',
            mode:"cors",
            data:{
                offset:offset,
                num:num,
                fid:fid,
                uid:uid,
                type:type,
                published:published
            }
        })
    }

}

module.exports = companyApi;

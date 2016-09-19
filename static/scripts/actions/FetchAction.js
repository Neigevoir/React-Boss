let FetchAction = {

    WillPosts(){
        return { type:'FETCHING_WILLPOSTS' }
    },

    FetchPosts(){
        return { type:'FETCHING_POSTING' }
    },

    DidPosts(){
        return { type:'FETCHING_DIDPOSIS' }
    },

    ResData(type,res,companytype){
        return { type:type, res ,companytype }
    }

}

module.exports = FetchAction;

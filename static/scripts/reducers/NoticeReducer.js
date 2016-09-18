import { combineReducers } from 'redux'
import constant from '../constants/notice'

function Notice(state=null, action){
    switch (action.type) {
        case constant.GET_NOTICEDATA:
            return  action.res
            break;
        case 'Fetching':
            return Object.assign({}, state, {
                FetchType: 'Fetching'
            })
            break;
        default:
            return state
    }
}

const todoApp = combineReducers({
    Notice
})

export default todoApp

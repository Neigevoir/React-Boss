import { combineReducers } from 'redux'
import constant from '../constants/position'

function Position(state=null, action){
    switch (action.type) {
        case constant.GET_LINEPOSITION:
            return Object.assign({}, state, {
                positiondata: action.res,
                positiontype: action.usertype
            })
            break;
        case constant.GET_SEARCHLIST:
            return Object.assign({}, state, {
                positiondata: action.res,
                positiontype: action.usertype
            })
            break;
        default:
            return state
    }
}

const todoApp = combineReducers({
    Position
})

export default todoApp

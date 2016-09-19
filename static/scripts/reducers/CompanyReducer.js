import { combineReducers } from 'redux'
import constant from '../constants/company'
import FetchingConstant from '../constants/fetching'

function Company(state=null, action){
    switch (action.type) {
        case constant.GET_COMPANYLINELIST:
            return Object.assign({}, state, {
                CompanyData: action.res,
                CompanyType: action.companytype
            })
            break;
        case constant.GET_COMPANYDETAIL:
            return Object.assign({}, state, {
                CompanyDetailData: action.res,
                CompanyDetailType: action.companytype
            })
            break;
        case FetchingConstant.FETCHING_POSTING:
            return Object.assign({}, state, {
                CompanyType: FetchingConstant.FETCHING_POSTING
            })
            break;
        default:
            return state
    }
}

function CompanyType(state='hidden', action){

    switch (action.type) {
        case constant.SHOW_COMPANYDETAIL:
            return action.companyDetailtype
            break;
        default:
            return state
    }
}

const todoApp = combineReducers({
    Company,
    CompanyType
})

export default todoApp

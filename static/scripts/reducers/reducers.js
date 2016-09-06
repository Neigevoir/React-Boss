import { combineReducers } from 'redux'

// 引入各reducers
import PositionReducer from './PositionReducer';
import CompanyReducer from './CompanyReducer';

const AppReducers = combineReducers({
    PositionReducer,
    CompanyReducer
})

export default AppReducers

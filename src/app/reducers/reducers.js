import { combineReducers } from 'redux'

// 引入各reducers
import PositionReducer from './PositionReducer'
import CompanyReducer from './CompanyReducer'
import InformationReducer from './InformationReducer'
import UserReducer from './UserReducer'
import NoticeReducer from './NoticeReducer'

const AppReducers = combineReducers({
  PositionReducer,
  CompanyReducer,
  InformationReducer,
  UserReducer,
  NoticeReducer
})

export default AppReducers

import { combineReducers } from 'redux'

import position from './position_reducer'
import company from './company_reducer'
import information from './information_reducer'
import user from './user_reducer'
import notice from './notice_reducer'

const AppReducers = combineReducers({
  position,
  company,
  information,
  user,
  notice
})

export default AppReducers

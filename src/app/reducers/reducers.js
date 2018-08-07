import PersistReducers from 'src/app/lib/persist_reducer'

import position from './position_reducer'
import loading from './loading_reducer'
import company from './company_reducer'
// import information from './information_reducer'
// import user from './user_reducer'
import notice from './notice_reducer'
import header from './header_reducer'
import footer from './footer_reducer'
import customer from './customer_reducer'

export default {
  position,
  loading,
  company,
  // information,
  // user,
  notice,
  customer: PersistReducers({
    key: 'customer',
    name: customer
  }),
  header,
  footer
}

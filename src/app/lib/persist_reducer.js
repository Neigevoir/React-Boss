import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import storageSession from 'redux-persist/es/storage/session'

/**
 *
 * @param {*string} key persist:key
 * @param {*number} version version number
 * @param {*boolen} DEBUG is debug ?
 * @param {*function} name reducer name
 * @param {*array} blacklist blacklist name
 */
const PersistReducers = ({
  key = 'app',
  storageType,
  version = 1,
  DEBUG = false,
  name,
  blacklist = []
}) =>
  persistReducer(
    {
      key: key,
      storage: storageType === 'session' ? storageSession : storage,
      version: version,
      debug: DEBUG,
      blacklist: blacklist
    },
    name
  )

export default PersistReducers

/**
 *NOTE: local or session storage
 */

const DEFAULT_STORAGE_TYPE = sessionStorage

/**
 * set storage
 * @param {*string} key
 * @param {*anything} value
 * @param {*Storage} name default storage type
 */
export const set = (key, value, name = DEFAULT_STORAGE_TYPE) =>
  name.setItem(key, value)

/**
 * get storage
 */
export const get = (key, name = DEFAULT_STORAGE_TYPE) => name.getItem(key)

/**
 * remove item key
 */
export const remove = (key, name = DEFAULT_STORAGE_TYPE) => name.removeItem(key)

/**
 * loop each key
 * @param {function} func
 * @param {*} name
 */
export const each = (func, name = DEFAULT_STORAGE_TYPE) => {
  if (!func || typeof func !== 'function') {
    throw new Error("required a function as it's only!")
  }
  const storage_lenght = name.length
  for (let index = storage_lenght - 1; index >= 0; index--) {
    let key = name.key(index)
    func(get(key), key, index)
  }
}

export const clearAll = (name = DEFAULT_STORAGE_TYPE) => name.clear()

import has from './has'
import pair from './pair'
import flatten from './flatten'

/**
 * Compares reference object to another object
 *
 * @function equals
 *
 * @see has
 * @see pair
 *
 * @param {Object} reference - what should be compared to
 * @param {Object} object - what we are comparing
 *
 * @return {boolean}
 */
function equals (r, o) {
  // Are they of the same type?
  if (typeof r !== typeof o || r.constructor !== o.constructor) {
    return false
  }

  // Do we need to check recursively?
  if (r.constructor !== Object) {
    return r === o
  }

  return flatten([
    pair(r),
    pair(o)
  ])
  .every(item => {
    return has(r)(item.key) &&
      has(o)(item.key) &&
      equals(r[item.key], o[item.key])
  })
}

export {equals as default}

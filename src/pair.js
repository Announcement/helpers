/**
 * Pairs an object into a set of {key, value} arrays
 *
 * @function pair
 *
 * @param {Object} object - collection to be paired
 *
 * @return {Array.<{name: string, value}>}
 */
function pair (object) {
  return Object.keys(object).map((key) => {
    return {key: key, value: object[key]}
  })
}

export {pair as default}

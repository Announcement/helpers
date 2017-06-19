/**
 * Pairs an object into a set of {key, value} arrays.
 *
 * @function pair
 *
 * @param {Object} object - Collection to be paired.
 *
 * @returns {Array.<{key: string, value}>} An array of the original object key-value pairs.
 */
function pair (object) {
  return Object
    .keys(object)
    .map(map)

  function map (key) {
    let value = object[key]

    return {
      key,
      value
    }
  }
}

export { pair as default }

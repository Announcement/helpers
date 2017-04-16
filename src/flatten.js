/**
 * Recursively brings arrays to the highest level
 *
 * @function flatten
 *
 * @param {Array.<Array>} array - container of the set
 *
 * @return Array
 */
function flatten (array) {
  let isArray
  let toArray
  let fromArray

  isArray = (it) => it.constructor === Array
  toArray = (it) => isArray(it) ? it : [it]
  fromArray = (a, b) => a.concat(b)

  while (array.some(isArray)) {
    array = array.map(toArray).reduce(fromArray)
  }

  return array
}

export {flatten as default}

import $array from './array'

/**
 * Recursively brings all arguments of arrays to the highest level.
 *
 * @function flatten
 *
 * @returns {Array} - Flattened array from the given arguments.
 */
function flatten () {
  let array = $array(arguments)
  let isArray
  let toArray
  let fromArray

  isArray = it => it.constructor === Array
  toArray = it => isArray(it) ? it : [ it ]
  fromArray = (a, b) => a.concat(b)

  while (array.some(isArray)) {
    array = array.map(toArray).reduce(fromArray)
  }

  return array
}

export { flatten as default }

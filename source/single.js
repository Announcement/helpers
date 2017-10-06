import check from './check'

/**
 * Dismantles unnecissary lists.
 *
 * @function single
 * @version 2
 *
 * @see check
 *
 * @param {Array} list - List of items.
 *
 * @returns {Array|Object} The only item or entire list.
 */
function single (list) {
  var result

  let isArray = it => check(it) === 'Array'
  let isLength = it => it.length === 1
  let alone = it => isArray(it) && isLength(it)

  result = alone(list) ? list.shift() : list

  return result
}

export default single

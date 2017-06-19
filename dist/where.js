'use strict'

/**
 * Appends values to an Array,
 * but first replaces undefined values before adding to the end.
 *
 * @function combine
 *
 * @param {Array} array - List of existing items.
 * @param {Array} values - Proposed additions to the list.
 *
 * @returns {Array} - Collective array.
 */

var combine = function (array, values) {
  let index

  array = array.concat([])

  while ((index = array.indexOf(undefined)) !== -1 && values.length > 0) {
    array[index] = values.shift()
  }

  return array.concat(values)
}

/**
 * Lazy way of turning an item into an Array.
 *
 * @function array
 *
 * @param {Object} it - Array like object.
 *
 * @returns {Array} Implicit array object.
 */
var array = function (it) {
  return Array.prototype.slice.call(it, 0)
}

/**
 * Check to see if an item is null or undefined.
 *
 * @function empty
 *
 * @param {Object} it - The item in question of existance.
 *
 * @returns {boolean} False, unless it is null or undefiend.
 */
var empty = function (it) {
  return it === undefined || it === null
}

/**
 * Returns a modified function with lazy option assocations.
 *
 * @function curry
 *
 * @see combine
 * @see array
 * @see empty
 *
 * @param {Function} method - Function to be curried.
 *
 * @returns {Function} Curried functions.
 */
var curry = function (method) {
  let enough = input => input.length >= method.length
  let missing = input => input.some(empty)
  let ready = it => enough(it) && !missing(it)

  return method.length <= 1 ? method : transform([]

  /**
   * Generated method through currying, allowing chainibility.
   *
   * @function transform
   *
   * @param {Array} parameters - Array of arguments.
   *
   * @returns {(Function|Object)} Intercepted output piped from source curry method.
   */
  ); function transform (parameters) {
    var inputs
    var context

    let results = () => method.apply(context, inputs)
    let update = it => context || it
    let fetch = it => !ready(it) ? transform(it) : results()

    return callback

    /**
     * Interception layer to revert back to transform if data is missing.
     *
     * @function callback
     *
     * @param {...Array} input - All of the variables to be accepted by method.
     *
     * @returns {Object} Output of the source curry method.
     **/
    function callback (...input) {
      var response

      inputs = combine(parameters, array(arguments))
      context = update(this)
      response = fetch(inputs)

      return response
    }
  }
}

/**
 * Verifies entry matches. Useful inside of a (filter) pipeline.
 *
 * @function where
 * @version 3.0.0
 *
 * @param {Object.<string, string>} search - Object with entries to match.
 * @param {Object.<string, string>} object - Input item to be tested.
 *
 * @returns {boolean} True if given entries are the same.
 */
function where (search, object) {
  var keys
  var result

  let every = key => search[key] === object[key]

  keys = Object.keys(search)
  result = keys.every(every)

  return result
}

exports.default = curry(where)

module.exports = exports.default

//# sourceMappingURL=map/where.js.map

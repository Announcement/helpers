'use strict'

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
 * Dismantles unnecissary lists.
 *
 * @function single
 *
 * @param {Array} list - List of items.
 *
 * @returns {Array|Object} The only item or entire list.
 */
function single (list) {
  var result

  let isArray = it => typeof it === 'object' && it instanceof Array
  let alone = it => isArray(it) && it.length === 1

  result = alone(list) ? list.shift() : list

  return result
}

/**
 * Checks to see if an item exists.
 *
 * @function exists
 *
 * @param {Object} it - The item in question of existance.
 *
 * @returns {boolean} True, unless it is null or undefined.
 */
function exists (it) {
  return it !== undefined && it !== null
}

/**
 * Attempts to apply mutation to subject.
 *
 * @function attempt
 *
 * @see array
 * @see single
 * @see exists
 *
 * @param {Function} mutation - Mutator function to be called on the subject.
 * @param {Object} subject - Any input that should be mutated.
 *
 * @returns {Object} Subject unless mutation can be applied.
 */
var attempt = function (mutation, subject) {
  var parameters
  var result

  let apply = (method, parameters) => method.apply(this, parameters)
  let valid = it => exists(it) && single(it)

  parameters = array(arguments).slice(1)
  result = apply(mutation, parameters)

  return valid(result) || valid(parameters)
}

/**
 * Injects a transformer into each element of a collection.
 *
 * @function inject
 *
 * @see attempt
 *
 * @param {Object.<string, Function>} it - Collection of functions.
 * @param {Function} transform - Mutator function to run through each of the functions in it.
 *
 * @returns {Object.<string, Function>} All it functions, but mutated via transform.
 */
function inject (it, transform) {
  var copy
  var keys

  let isObject = it => typeof it === 'object' && it.constructor.name === 'Object'

  let isFunction = it => typeof it === 'function' && it.constructor.name === 'Function'

  let forObject = it => isObject(it) && inject(it, transform)

  let forFunction = it => isFunction(it) && attempt(transform, it)

  keys = Object.keys(it)
  copy = {}

  keys.forEach(forEach)

  return copy

  function forEach (key) {
    var value

    value = it[key]

    value = attempt(forObject, value)
    value = attempt(forFunction, value)

    copy[key] = value
  }
}

module.exports = inject

//# sourceMappingURL=map/inject.js.map

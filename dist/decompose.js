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
 * Applies functions to a value and moves down the chain if possible.
 *
 * @function decompose
 *
 * @see exists
 * @see attempt
 * @see array
 *
 * @param {Array} array - List of functions to be applied.
 * @param {Object} initial - Optional initial item.
 *
 * @returns {Object} Mutated version of the initial value.
 */
var decompose = function (array, initial) {
  let composer = (previous, current) => attempt(current, previous)
  let reducer = it => array.reduce(composer, initial || it)

  return initial ? reducer(initial) : reducer
}

module.exports = decompose

//# sourceMappingURL=map/decompose.js.map

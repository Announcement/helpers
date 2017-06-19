'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

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

var array$1 = Object.freeze({
  default: array
})

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
  return Object.keys(object).map(map)

  function map (key) {
    let value = object[key]

    return {
      key,
      value
    }
  }
}

var pair$1 = Object.freeze({
  default: pair
})

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

var curry$1 = Object.freeze({
  default: curry
})

/**
 * Recursively brings all arguments of arrays to the highest level.
 *
 * @function flatten
 *
 * @returns {Array} - Flattened array from the given arguments.
 */
function flatten () {
  let array$$1 = array(arguments)
  let isArray
  let toArray
  let fromArray

  isArray = it => it.constructor === Array
  toArray = it => isArray(it) ? it : [it]
  fromArray = (a, b) => a.concat(b)

  while (array$$1.some(isArray)) {
    array$$1 = array$$1.map(toArray).reduce(fromArray)
  }

  return array$$1
}

var flatten$1 = Object.freeze({
  default: flatten
})

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

var attempt$1 = Object.freeze({
  default: attempt
})

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

var decompose$1 = Object.freeze({
  default: decompose
})

exports.array = array$1
exports.attempt = attempt$1
exports.decomposed = decompose$1
exports.flatten = flatten$1
exports.method = curry$1
exports.pair = pair$1

//# sourceMappingURL=map/as.js.map

'use strict'
/**
 * Appends values to an Array,
 * but first replaces undefined values before adding to the end
 *
 * @function combine
 *
 * @param {Array} array - list of existing items
 * @param {Array} values - proposed additions to the lsit
 *
 * @return {Array} - collective array
 */

function combine (array, values) {
  var index = void 0

  array = array.concat([])

  while ((index = array.indexOf(undefined)) !== -1 && values.length > 0) {
    array[index] = values.shift()
  }

  return array.concat(values)
}

/**
 * Lazy way of turning an item into an Array
 * @function array
 *
 * @param {Object} it - Array like object
 *
 * @return {Array} - implicit array object
 */
function array (it) {
  return Array.prototype.slice.call(it, 0)
}

/**
 * Checks to see if an item is null or undefined)
 * @function empty
 *
 * @param {Object} it - the item in question of existance
 *
 * @return {boolean}
 */
function empty (it) {
  return it === undefined || it === null
}

/**
 * Returns a modified function with lazy option assocations
 *
 * @function curry
 *
 * @param {Function} method - function to be curried
 *
 * @return {Function} curried functions
 */
function curry (method) {
  var enough = function enough (input) {
    return input.length < method.length
  }
  var missing = function missing (input) {
    return input.some(empty)
  }
  var ready = function ready (it) {
    return enough(it) && !missing(it)
  }

  return method.length <= 1 ? method : transform([]
    /**
  * Generated method through currying, allowing chainibility
  * @function transform
  *
  * @see combine
  * @this
  *
  * @param {Array} params - arguments array
  *
  * @return {(Function|Object)} intercepted output piped from source curry method
  */)
  function transform (params) {
    var inputs
    var context

    var results = function results () {
      return method.apply(context, inputs)
    }
    var update = function update (it) {
      return context || it
    }
    var fetch = function fetch (it) {
      return !ready(it) ? transform(it) : results()
    }

    return callback

    /**
     * Interception layer to revert back to transform if data is missing
     * @function callback
     *
     * @param {Array} input - all of the variables to be accepted by method
     *
     * @returns {Object} piped output from source curry method
     **/
    function callback () {
      for (
        var _len = arguments.length, input = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        input[_key] = arguments[_key]
      }

      var response

      inputs = combine(params, array(arguments))
      context = update(this)
      response = fetch(inputs)

      return response
    }
  }
}

function $toProperty (property, object) {
  return object[property]
}

function add (x, y) {
  return x + y
}

var toProperty = curry($toProperty)

function allAre () {
  var length

  var toLength = toProperty('length')
  var toTotal = add

  for (
    var _len2 = arguments.length, methods = Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    methods[_key2] = arguments[_key2]
  }

  length = methods.map(toLength).reduce(toTotal)

  function prepare (params) {
    var context

    var update = function update (it) {
      return context || it
    }
    var enough = function enough () {
      return params.length < length
    }
    var from = function from () {
      return fromPartial() || fromProxy()
    }

    return function () {
      var result

      context = update(this)
      result = !enough() || from()

      return result
    }
  }

  function fromPartial () {}
  function fromProxy () {}

  return prepare([])
}

module.exports = allAre
// # sourceMappingURL=map/all.js.map

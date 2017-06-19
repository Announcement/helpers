'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

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
var $array = function (it) {
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

      inputs = combine(parameters, $array(arguments))
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

exports.where = curry(where)

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
  toArray = it => isArray(it) ? it : [it]
  fromArray = (a, b) => a.concat(b)

  while (array.some(isArray)) {
    array = array.map(toArray).reduce(fromArray)
  }

  return array
}

/**
 * Intended to be used with Array.prototype.reduce.
 *
 * @function select
 * @version 3.0.0
 *
 * @param {...string} it - Property to pull from each object.
 *
 * @returns {Function} A callback function for reducing objects to similar objects with only specified properties.
 */
function select (it) {
  let params = flatten(it, $array(arguments))
  let isArray = it => it instanceof Array

  function compliant (it, key) {
    return params.indexOf(key) !== -1 ? it[key] : [it[key]]
  }

  function prepare (it) {
    var key

    for (key in it) {
      it[key] = compliant(it, key)
    }

    return it
  }

  function normalize (it) {
    if (!isArray(it)) {
      return [prepare(it)]
    }

    return it
  }

  function pull (item) {
    var response

    let forEach = param => {
      response[param] = item[param]
    }

    response = {}

    params.forEach(forEach)

    return response
  }

  function merge (reference, object) {
    var keys

    let ensure = key => {
      reference[key] = reference[key] || []
    }
    let concat = key => {
      reference[key] = reference[key].concat(object[key])
    }
    let listed = key => params.indexOf(key) === -1

    keys = Object.keys(object).filter(listed)

    keys.forEach(ensure)
    keys.forEach(concat)

    return reference
  }

  function append (array, item) {
    var index
    var query
    var search

    query = pull(item)
    search = exports.where(query)
    index = array.findIndex(search)

    if (index !== -1) {
      array[index] = merge(array[index], item)
    } else {
      array.push(item)
    }

    return array
  }

  function reducer (previous, current) {
    var array
    var item

    array = normalize(previous)
    item = prepare(current)

    array = append(array, item)

    return array
  }

  return reducer
}

// normal is the most convenient implementation
// filter is the most efficient implementation
// reduce is the most reliable implementation

var unique = {
  normal: curry(function normal (array, value) {
    return array.filter(exports.where(value)).length > 1
  }),
  filter: function filter (value, index, array) {
    return array.indexOf(value, index + 1) === -1
  },
  reduce: function reduce (previous, current) {
    let beforeReduce = it => it instanceof Array ? it : [it]

    previous = beforeReduce(previous)

    if (!previous.find(exports.where(current))) {
      previous.push(current)
    }

    return previous
  }
}

exports.select = select
exports.unique = unique

//# sourceMappingURL=map/query.js.map

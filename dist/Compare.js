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

var _createClass = (function () {
  function defineProperties (target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) { descriptor.writable = true }
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) { defineProperties(Constructor.prototype, protoProps) }
    if (staticProps) { defineProperties(Constructor, staticProps) }
    return Constructor
  }
}())

var _typeof = typeof Symbol === 'function' &&
  typeof Symbol.iterator === 'symbol'
  ? function (obj) {
    return typeof obj
  }
  : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol &&
      obj !== Symbol.prototype
      ? 'symbol'
      : typeof obj
  }

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

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

/**
 * Curried shortcut to hasOwnProperty
 *
 * @function has
 *
 * @param {Object} object - collection containing property
 * @param {String} property - property name to be checked
 *
 * @return {boolean}
 */
var has = curry(function (object, property) {
  return object.hasOwnProperty(property)
})

/**
 * Pairs an object into a set of {key, value} arrays
 *
 * @function pair
 *
 * @param {Object} object - collection to be paired
 *
 * @return {Array.<{key: string, value}>}
 */
function pair (object) {
  return Object.keys(object).map(function (key) {
    return { key: key, value: object[key] }
  })
}

/**
 * Recursively brings arrays to the highest level
 *
 * @function flatten
 *
 * @param {Array.<Array>} array - container of the set
 *
 * @return Array
 */
function flatten () {
  var array$$1 = array(arguments)
  var isArray = void 0
  var toArray = void 0
  var fromArray = void 0

  isArray = function isArray (it) {
    return it.constructor === Array
  }
  toArray = function toArray (it) {
    return isArray(it) ? it : [ it ]
  }
  fromArray = function fromArray (a, b) {
    return a.concat(b)
  }

  while (array$$1.some(isArray)) {
    array$$1 = array$$1.map(toArray).reduce(fromArray)
  }

  return array$$1
}

/**
 * Check if they're similar in origin (type & constructor)
 * @method isSimilar
 *
 * @param {object} reference
 * @param {object} object
 *
 * @return {boolean}
 */
function similar (reference, object) {
  var typesMatch = void 0
  var constructorsMatch = void 0

  constructorsMatch = reference.constructor === object.constructor
  typesMatch = (typeof reference === 'undefined'
    ? 'undefined'
    : _typeof(reference)) ===
    (typeof object === 'undefined' ? 'undefined' : _typeof(object))

  return typesMatch && constructorsMatch
}

/**
 * Compares reference object to another object
 *
 * @function equals
 *
 * @see has
 * @see pair
 *
 * @param {Object} reference - what should be compared to
 * @param {Object} object - what we are comparing
 *
 * @return {boolean}
 */
function equals (reference, object) {
  return similar(reference, object) && identical(reference, object)
}

/**
 * Checks to see if two items of the same type and class are the same
 * @param identical
 *
 * @param {object} reference - what is being compared to
 * @param {object} object - what is being compared
 *
 * @return {boolean}
 */
function identical (reference, object) {
  var every = function every (item) {
    return has(reference)(item.key) && has(object)(item.key) &&
      equals(reference[item.key], object[item.key])
  }

  // avoid unnecissary recursion
  if (reference.constructor !== Object) {
    return reference === object
  }

  return flatten([ pair(reference), pair(object) ]).every(every)
}

/**
 * Checks to see if an item exists (isn't null or undefined)
 * @function exists
 *
 * @param {Object} it - the item in question of existance
 *
 * @return {boolean}
 */
function exists (it) {
  return it !== undefined && it !== null
}

var Compare = (function () {
  function Compare (reference) {
    var polarity = arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : true

    _classCallCheck(this, Compare)

    this.reference = reference
    this.polarity = polarity
  }

  _createClass(
    Compare,
    [
      {
        key: 'element',
        value: function element () {
          return Compare.isElement(this.reference)
        }
      },
      {
        key: 'fragment',
        value: function fragment () {
          return Compare.isFragment(this.reference)
        }
      },
      {
        key: 'text',
        value: function text () {
          return Compare.isText(this.reference)
        }
      },
      {
        key: 'equal',
        value: function equal (it) {
          return Compare.isEqual(this.reference, it)
        }
      },
      {
        key: 'existant',
        value: function existant () {
          return Compare.isExistant(this.reference)
        }
      },
      {
        key: 'not',
        get: function get () {
          return new Compare(this.reference, !this.polarity)
        }
      }
    ],
    [
      {
        key: 'isElement',
        value: function isElement (object) {
          return object instanceof Element
        }
      },
      {
        key: 'isFragment',
        value: function isFragment (object) {
          return object.constructor === DocumentFragment
        }
      },
      {
        key: 'isText',
        value: function isText (object) {
          return object.constructor === Text
        }
      },
      {
        key: 'isEqual',
        value: function isEqual (reference, object) {
          return equals(reference, object)
        }
      },
      {
        key: 'isExistant',
        value: function isExistant (object) {
          return exists(object)
        }
      }
    ]
  )

  return Compare
}())

module.exports = Compare
// # sourceMappingURL=map/Compare.js.map

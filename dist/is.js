'use strict'

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

function similar (reference, object) {
  var typesMatch = void 0
  var constructorsMatch = void 0

  constructorsMatch = reference.constructor === object.constructor
  typesMatch = (typeof reference === 'undefined' ? 'undefined' : _typeof(reference)) === (typeof object === 'undefined' ? 'undefined' : _typeof(object))

  return typesMatch && constructorsMatch
}

var equal = function equal (reference, object) {
  if (!similar(reference, object)) {
    return false
  }
}

function exists (it) {
  return it !== undefined && it !== null
}

var array = function array (it) {
  return Array.prototype.slice.call(it, 0)
}

function single (list) {
  var result

  var isArray = function isArray (it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' && it instanceof Array
  }
  var alone = function alone (it) {
    return isArray(it) && it.length === 1
  }

  result = alone(list) ? list.shift() : list

  return result
}

var attempt = function attempt (mutation, subject) {
  var _this = this

  var parameters
  var result

  var apply = function apply (method, parameters) {
    return method.apply(_this, parameters)
  }
  var valid = function valid (it) {
    return exists(it) && single(it)
  }

  parameters = array(arguments).slice(1)
  result = apply(mutation, parameters)

  return valid(result) || valid(parameters)
}

function inject (it, transform) {
  var copy
  var keys

  var isObject = function isObject (it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' && it.constructor.name === 'Object'
  }

  var isFunction = function isFunction (it) {
    return typeof it === 'function' && it.constructor.name === 'Function'
  }

  var forObject = function forObject (it) {
    return isObject(it) && inject(it, transform)
  }

  var forFunction = function forFunction (it) {
    return isFunction(it) && attempt(transform, it)
  }

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

var combine = function combine (array, values) {
  var index = void 0

  array = array.concat([])

  while ((index = array.indexOf(undefined)) !== -1 && values.length > 0) {
    array[index] = values.shift()
  }

  return array.concat(values)
}

var empty = function empty (it) {
  return it === undefined || it === null
}

var curry = function curry (method) {
  var enough = function enough (input) {
    return input.length >= method.length
  }
  var missing = function missing (input) {
    return input.some(empty)
  }
  var ready = function ready (it) {
    return enough(it) && !missing(it)
  }

  return method.length <= 1 ? method : transform([])

  function transform (parameters) {
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

    function callback () {
      for (var _len = arguments.length, input = Array(_len), _key = 0; _key < _len; _key++) {
        input[_key] = arguments[_key]
      }

      var response

      inputs = combine(parameters, array(arguments))
      context = update(this)
      response = fetch(inputs)

      return response
    }
  }
}

function negated (it) {
  return function () {
    return !it.apply(this, arguments)
  }
}

function prepare (it) {
  var not
  var tmp

  not = inject(it, negated)
  not = inject(not, curry)
  tmp = inject(it, curry)

  tmp.not = not

  return tmp
}

function inside (haystack, needle) {
  var toValues = function toValues (object) {
    return function (key) {
      return object[key]
    }
  }
  var isArray = function isArray (it) {
    return it instanceof Array
  }
  var isObject = function isObject (it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object'
  }
  var values = function values (it) {
    return Object.keys(it).map(toValues(it))
  }

  var areInside = function areInside (it) {
    return inside(it, needle)
  }

  var insideArray = function insideArray () {
    return haystack.some(areInside)
  }
  var insideObject = function insideObject () {
    return values(haystack).some(areInside)
  }

  var array = function array () {
    return isArray(haystack) && insideArray(haystack, needle)
  }
  var object = function object () {
    return isObject(haystack) && insideObject(haystack, needle)
  }
  var matches = function matches () {
    return haystack === needle
  }
  var search = function search () {
    return array() || object()
  }

  return matches() || search()
}

var ELEMENT_NODE = 1
var DOCUMENT_FRAGMENT_NODE = 11
var TEXT_NODE = 3

var element = function element (it) {
  return it.nodeType === ELEMENT_NODE
}
var fragment = function fragment (it) {
  return it.nodeType === DOCUMENT_FRAGMENT_NODE
}
var text = function text (it) {
  return it.nodeType === TEXT_NODE
}

var is = prepare({
  element: element,
  equal: equal,
  existent: exists,
  fragment: fragment,
  inside: inside,
  text: text
})

module.exports = is

//# sourceMappingURL=map/is.js.map

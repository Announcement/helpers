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

var array$1 = Object.freeze({
  default: array
})

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

var attempt$1 = Object.freeze({
  default: attempt
})

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

var curry$1 = Object.freeze({
  default: curry
})

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

var $is = Object.freeze({
  default: is
})

function pair (object) {
  return Object.keys(object).map(map)

  function map (key) {
    var value = object[key]

    return {
      key: key,
      value: value
    }
  }
}

var pair$1 = Object.freeze({
  default: pair
})

function flatten () {
  var array$$1 = array(arguments)
  var isArray = void 0
  var toArray = void 0
  var fromArray = void 0

  isArray = function isArray (it) {
    return it.constructor === Array
  }
  toArray = function toArray (it) {
    return isArray(it) ? it : [it]
  }
  fromArray = function fromArray (a, b) {
    return a.concat(b)
  }

  while (array$$1.some(isArray)) {
    array$$1 = array$$1.map(toArray).reduce(fromArray)
  }

  return array$$1
}

var flatten$1 = Object.freeze({
  default: flatten
})

var decompose = function decompose (array, initial) {
  var composer = function composer (previous, current) {
    return attempt(current, previous)
  }
  var reducer = function reducer (it) {
    return array.reduce(composer, initial || it)
  }

  return initial ? reducer(initial) : reducer
}

var decompose$1 = Object.freeze({
  default: decompose
})

var $as = Object.freeze({
  array: array$1,
  attempt: attempt$1,
  decomposed: decompose$1,
  flatten: flatten$1,
  method: curry$1,
  pair: pair$1
})

var _where

function where (search, object) {
  var keys
  var result

  var every = function every (key) {
    return search[key] === object[key]
  }

  keys = Object.keys(search)
  result = keys.every(every)

  return result
}

_where = curry(where)

function select (it) {
  var params = flatten(it, array(arguments))
  var isArray = function isArray (it) {
    return it instanceof Array
  }

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

    var forEach = function forEach (param) {
      response[param] = item[param]
    }

    response = {}

    params.forEach(forEach)

    return response
  }

  function merge (reference, object) {
    var keys

    var ensure = function ensure (key) {
      reference[key] = reference[key] || []
    }
    var concat = function concat (key) {
      reference[key] = reference[key].concat(object[key])
    }
    var listed = function listed (key) {
      return params.indexOf(key) === -1
    }

    keys = Object.keys(object).filter(listed)

    keys.forEach(ensure)
    keys.forEach(concat)

    return reference
  }

  function append (array$$1, item) {
    var index
    var query
    var search

    query = pull(item)
    search = _where(query)
    index = array$$1.findIndex(search)

    if (index !== -1) {
      array$$1[index] = merge(array$$1[index], item)
    } else {
      array$$1.push(item)
    }

    return array$$1
  }

  function reducer (previous, current) {
    var array$$1
    var item

    array$$1 = normalize(previous)
    item = prepare(current)

    array$$1 = append(array$$1, item)

    return array$$1
  }

  return reducer
}

var unique = {
  normal: curry(function normal (array, value) {
    return array.filter(_where(value)).length > 1
  }),
  filter: function filter (value, index, array) {
    return array.indexOf(value, index + 1) === -1
  },
  reduce: function reduce (previous, current) {
    var beforeReduce = function beforeReduce (it) {
      return it instanceof Array ? it : [it]
    }

    previous = beforeReduce(previous)

    if (!previous.find(_where(current))) {
      previous.push(current)
    }

    return previous
  }
}

var $query = Object.freeze({
  select: select,
  unique: unique,
  get where () {
    return _where
  }
})

exports.are = $is
exports.as = $as
exports.is = $is
exports.query = $query

//# sourceMappingURL=map/helpers.js.map

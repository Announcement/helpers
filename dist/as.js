'use strict'

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

Object.defineProperty(exports, '__esModule', { value: true })

var array = function array (it) {
  return Array.prototype.slice.call(it, 0)
}

var array$1 = Object.freeze({
  default: array
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

function exists (it) {
  return it !== undefined && it !== null
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

exports.array = array$1
exports.attempt = attempt$1
exports.decomposed = decompose$1
exports.flatten = flatten$1
exports.method = curry$1
exports.pair = pair$1

//# sourceMappingURL=map/as.js.map

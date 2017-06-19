'use strict'

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

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

module.exports = prepare

//# sourceMappingURL=map/prepare.js.map

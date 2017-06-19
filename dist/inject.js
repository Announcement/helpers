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

module.exports = inject

//# sourceMappingURL=map/inject.js.map

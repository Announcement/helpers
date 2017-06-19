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

var decompose = function decompose (array, initial) {
  var composer = function composer (previous, current) {
    return attempt(current, previous)
  }
  var reducer = function reducer (it) {
    return array.reduce(composer, initial || it)
  }

  return initial ? reducer(initial) : reducer
}

module.exports = decompose

//# sourceMappingURL=map/decompose.js.map

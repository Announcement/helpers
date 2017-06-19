'use strict'

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

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

module.exports = inside

//# sourceMappingURL=map/inside.js.map

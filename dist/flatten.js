'use strict'

var $array = function $array (it) {
  return Array.prototype.slice.call(it, 0)
}

function flatten () {
  var array = $array(arguments)
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

  while (array.some(isArray)) {
    array = array.map(toArray).reduce(fromArray)
  }

  return array
}

module.exports = flatten

//# sourceMappingURL=map/flatten.js.map

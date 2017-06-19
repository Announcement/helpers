'use strict'

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }

function similar (reference, object) {
  var typesMatch = void 0
  var constructorsMatch = void 0

  constructorsMatch = reference.constructor === object.constructor
  typesMatch = (typeof reference === 'undefined' ? 'undefined' : _typeof(reference)) === (typeof object === 'undefined' ? 'undefined' : _typeof(object))

  return typesMatch && constructorsMatch
}

module.exports = similar

//# sourceMappingURL=map/similar.js.map

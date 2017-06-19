'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

function similar (reference, object) {
  let typesMatch
  let constructorsMatch

  constructorsMatch = reference.constructor === object.constructor
  typesMatch = typeof reference === typeof object

  return typesMatch && constructorsMatch
}

exports.default = similar

//# sourceMappingURL=map/similar.js.map

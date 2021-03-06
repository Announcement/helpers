'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _attempt = require('./attempt')

var _attempt2 = _interopRequireDefault(_attempt)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Injects a transformer into each element of a collection.
 *
 * @function inject
 *
 * @see attempt
 *
 * @param {Object.<string, Function>} it - Collection of functions.
 * @param {Function} transform - Mutator function to run through each of the functions in it.
 *
 * @returns {Object.<string, Function>} All it functions, but mutated via transform.
 */
function inject (it, transform) {
  var copy
  var keys

  let isObject = it => typeof it === 'object' && it.constructor.name === 'Object'

  let isFunction = it => typeof it === 'function' && it.constructor.name === 'Function'

  let forObject = it => isObject(it) && inject(it, transform)

  let forFunction = it => isFunction(it) && (0, _attempt2.default)(transform, it)

  keys = Object.keys(it)
  copy = {}

  keys.forEach(forEach)

  return copy

  function forEach (key) {
    var value

    value = it[key]

    value = (0, _attempt2.default)(forObject, value)
    value = (0, _attempt2.default)(forFunction, value)

    copy[key] = value
  }
}

exports.default = inject

//# sourceMappingURL=map/inject.js.map

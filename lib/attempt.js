'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.default = function (mutation, subject) {
  var parameters
  var result

  let apply = (method, parameters) => method.apply(this, parameters)
  let valid = it => (0, _exists2.default)(it) && (0, _single2.default)(it)

  parameters = (0, _array2.default)(arguments).slice(1)
  result = apply(mutation, parameters)

  return valid(result) || valid(parameters)
}

var _array = require('./array')

var _array2 = _interopRequireDefault(_array)

var _single = require('./single')

var _single2 = _interopRequireDefault(_single)

var _exists = require('./exists')

var _exists2 = _interopRequireDefault(_exists)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

//# sourceMappingURL=map/attempt.js.map

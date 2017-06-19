'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.default = function (array, initial) {
  let composer = (previous, current) => (0, _attempt2.default)(current, previous)
  let reducer = it => array.reduce(composer, initial || it)

  return initial ? reducer(initial) : reducer
}

var _attempt = require('./attempt')

var _attempt2 = _interopRequireDefault(_attempt)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

//# sourceMappingURL=map/decompose.js.map

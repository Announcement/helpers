'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.default = function (reference, object) {
  if (!(0, _similar2.default)(reference, object)) {
    return false
  }

  if (reference.constructor !== Object) {
    return reference === object
  }

  return (0, _flatten2.default)([(0, _pair2.default)(reference), (0, _pair2.default)(object)]).every(item => {
    return (0, _has2.default)(reference)(item.key) && (0, _has2.default)(object)(item.key) && equals(reference[item.key], object[item.key])
  })
}

var _has = require('./has')

var _has2 = _interopRequireDefault(_has)

var _pair = require('./pair')

var _pair2 = _interopRequireDefault(_pair)

var _flatten = require('./flatten')

var _flatten2 = _interopRequireDefault(_flatten)

var _similar = require('./similar')

var _similar2 = _interopRequireDefault(_similar)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

//# sourceMappingURL=map/equals.js.map

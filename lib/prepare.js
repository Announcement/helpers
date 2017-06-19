'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _inject = require('./inject')

var _inject2 = _interopRequireDefault(_inject)

var _curry = require('./curry')

var _curry2 = _interopRequireDefault(_curry)

var _negated = require('./negated')

var _negated2 = _interopRequireDefault(_negated)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function prepare (it) {
  var not
  var tmp

  not = (0, _inject2.default)(it, _negated2.default)
  not = (0, _inject2.default)(not, _curry2.default)
  tmp = (0, _inject2.default)(it, _curry2.default)

  tmp.not = not

  return tmp
}

exports.default = prepare

//# sourceMappingURL=map/prepare.js.map

'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.default = function (reference, object) {
  if (!(0, _similar2.default)(reference, object)) {
    return false
  }

  // if (reference.constructor !== Object) {
  //   return reference === object
  // }

  // return flatten([
  //   pair(reference),
  //   pair(object)
  // ])
  // .every(item => {
  //   return has(reference)(item.key) &&
  //     has(object)(item.key) &&
  //     equals(reference[item.key], object[item.key])
  // })
}

var _similar = require('./similar')

var _similar2 = _interopRequireDefault(_similar)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

//# sourceMappingURL=map/equals.js.map

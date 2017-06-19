'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = undefined

var _curry = require('./curry')

var _curry2 = _interopRequireDefault(_curry)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

let has = (0, _curry2.default)((object, property) => {
  return object.hasOwnProperty(property)
})

exports.default = has

//# sourceMappingURL=map/has.js.map

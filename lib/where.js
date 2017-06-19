'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = undefined

var _curry = require('./curry')

var _curry2 = _interopRequireDefault(_curry)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var _where

function where (search, object) {
  var keys
  var result

  let every = key => search[key] === object[key]

  keys = Object.keys(search)
  result = keys.every(every)

  return result
}

exports.default = _where = (0, _curry2.default)(where)

exports.default = _where

//# sourceMappingURL=map/where.js.map

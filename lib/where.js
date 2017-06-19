'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = undefined

var _curry = require('./curry')

var _curry2 = _interopRequireDefault(_curry)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var _where

/**
 * Verifies entry matches. Useful inside of a (filter) pipeline.
 *
 * @function where
 * @version 3.0.0
 *
 * @param {Object.<string, string>} search - Object with entries to match.
 * @param {Object.<string, string>} object - Input item to be tested.
 *
 * @returns {boolean} True if given entries are the same.
 */
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

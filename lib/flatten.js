'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = undefined

var _array = require('./array')

var _array2 = _interopRequireDefault(_array)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function flatten () {
  let array = (0, _array2.default)(arguments)
  let isArray
  let toArray
  let fromArray

  isArray = it => it.constructor === Array
  toArray = it => isArray(it) ? it : [it]
  fromArray = (a, b) => a.concat(b)

  while (array.some(isArray)) {
    array = array.map(toArray).reduce(fromArray)
  }

  return array
}

exports.default = flatten

//# sourceMappingURL=map/flatten.js.map

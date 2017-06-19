'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _where = require('./where')

var _where2 = _interopRequireDefault(_where)

var _curry = require('./curry')

var _curry2 = _interopRequireDefault(_curry)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

// normal is the most convenient implementation
// filter is the most efficient implementation
// reduce is the most reliable implementation

exports.default = {
  normal: (0, _curry2.default)(function normal (array, value) {
    return array.filter((0, _where2.default)(value)).length > 1
  }),
  filter: function filter (value, index, array) {
    return array.indexOf(value, index + 1) === -1
  },
  reduce: function reduce (previous, current) {
    let beforeReduce = it => it instanceof Array ? it : [it]

    previous = beforeReduce(previous)

    if (!previous.find((0, _where2.default)(current))) {
      previous.push(current)
    }

    return previous
  }
}

//# sourceMappingURL=map/unique.js.map

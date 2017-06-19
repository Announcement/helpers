'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = undefined

var _curry = require('./curry')

var _curry2 = _interopRequireDefault(_curry)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function allAre (...methods) {
  var length

  let toProperty = (0, _curry2.default)($toProperty)
  let toLength = toProperty('length')
  let toTotal = add

  length = methods.map(toLength).reduce(toTotal)

  return prepare([])

  function prepare (params) {
    var context

    let update = it => context || it
    let enough = () => params.length < length
    let from = () => fromPartial() || fromProxy()

    return function (...args) {
      var result

      context = update(this)
      result = !enough() || from()

      return result
    }
  }

  function fromPartial () {}
  function fromProxy () {}

  function $toProperty (property, object) {
    return object[property]
  }

  function add (x, y) {
    return x + y
  }
}

exports.default = allAre

//# sourceMappingURL=map/all.js.map

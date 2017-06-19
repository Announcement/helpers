'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.default = function (method) {
  let enough = input => input.length >= method.length
  let missing = input => input.some(_empty2.default)
  let ready = it => enough(it) && !missing(it)

  return method.length <= 1 ? method : transform([])

  function transform (parameters) {
    var inputs
    var context

    let results = () => method.apply(context, inputs)
    let update = it => context || it
    let fetch = it => !ready(it) ? transform(it) : results()

    return callback

    function callback (...input) {
      var response

      inputs = (0, _combine2.default)(parameters, (0, _array2.default)(arguments))
      context = update(this)
      response = fetch(inputs)

      return response
    }
  }
}

var _combine = require('./combine')

var _combine2 = _interopRequireDefault(_combine)

var _array = require('./array')

var _array2 = _interopRequireDefault(_array)

var _empty = require('./empty')

var _empty2 = _interopRequireDefault(_empty)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

//# sourceMappingURL=map/curry.js.map

'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.default = function (method) {
  let enough = input => input.length >= method.length
  let missing = input => input.some(_empty2.default)
  let ready = it => enough(it) && !missing(it)

  return method.length <= 1 ? method : transform([]

  /**
   * Generated method through currying, allowing chainibility.
   *
   * @function transform
   *
   * @param {Array} parameters - Array of arguments.
   *
   * @returns {(Function|Object)} Intercepted output piped from source curry method.
   */
  ); function transform (parameters) {
    var inputs
    var context

    let results = () => method.apply(context, inputs)
    let update = it => context || it
    let fetch = it => !ready(it) ? transform(it) : results()

    return callback

    /**
     * Interception layer to revert back to transform if data is missing.
     *
     * @function callback
     *
     * @param {...Array} input - All of the variables to be accepted by method.
     *
     * @returns {Object} Output of the source curry method.
     **/
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

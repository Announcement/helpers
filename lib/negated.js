'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
/**
 * Returns a modified version of a function with negated boolean output.
 *
 * @function negated
 *
 * @param {Function} it - Method to be negated.
 *
 * @returns {Function} Function with inverse output.
 */
function negated (it) {
  return function () {
    return !it.apply(this, arguments)
  }
}

exports.default = negated

//# sourceMappingURL=map/negated.js.map

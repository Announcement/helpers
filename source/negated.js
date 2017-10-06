/**
 * Returns a modified version of a function with negated boolean output.
 *
 * @function negated
 *
 * @param {Function} it - Method to be negated.
 *
 * @returns {Function} Function with inverse output.
 */
export default function negated (it) {
  return function () {
    let result
    let inverse

    result = it.apply(this, arguments)
    inverse = !result

    return inverse
  }
}

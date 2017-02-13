/**
 * Returns a modified version of a function with negated boolean output
 *
 * @function negated
 *
 * @param {Function} it - method to be negated
 *
 * @return {Function}
 */
function negated (it) {
  return function () {
    return !it.apply(this, arguments)
  }
}

export {negated as default}

import combine from './combine'
import array from './array'

/**
 * Returns a modified function with lazy option assocations
 *
 * @function curry
 *
 * @param {Function} method - function to be curried
 *
 * @return {Function} curried functions
 */
function curry (method) {
  /**
  * Generated method through currying, allowing chainibility
  * @function transform
  *
  * @see combine
  * @this
  *
  * @param {Array} params - arguments array
  *
  * @return {Object} piped output from source curry method
  */
  function transform (params) {
    let context

    return function (...input) {
      let args = combine(params, array(arguments))

      context = context || this

      if (args.length < method.length || args.some((it) => it === undefined)) {
        return transform(args)
      } else {
        return method.apply(context, args)
      }
    }
  }
  return method.length <= 1 ? method : transform([])
}

export {curry as default}

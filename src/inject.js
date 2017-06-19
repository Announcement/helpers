import attempt from './attempt'

/**
 * Injects a transformer into each element of a collection.
 *
 * @function inject
 *
 * @see attempt
 *
 * @param {Object.<string, Function>} it - Collection of functions.
 * @param {Function} transform - Mutator function to run through each of the functions in it.
 *
 * @returns {Object.<string, Function>} All it functions, but mutated via transform.
 */
function inject (it, transform) {
  var copy
  var keys

  let isObject = it =>
    typeof it === 'object' && it.constructor.name === 'Object'

  let isFunction = it =>
    typeof it === 'function' && it.constructor.name === 'Function'

  let forObject = it =>
    isObject(it) && inject(it, transform)

  let forFunction = it =>
    isFunction(it) && attempt(transform, it)

  keys = Object.keys(it)
  copy = {}

  keys.forEach(forEach)

  return copy

  function forEach (key) {
    var value

    value = it[key]

    value = attempt(forObject, value)
    value = attempt(forFunction, value)

    copy[key] = value
  }
}

export default inject

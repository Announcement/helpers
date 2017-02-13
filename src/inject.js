import attempt from './attempt'

/**
 * Injects a transformer into each element of a collection
 *
 * @name inject(it, transformer)
 *
 * @see attempt
 *
 * @param {Object} it - collection
 * @param {Function} tranform - mutator function
 *
 * @return {Object.<string, Function>}
 */
function inject (it, transform) {
  let copy = {}

  function cycle (key, value) {
    if (value === copy) { return false }

    if (typeof value === 'function') { return attempt(transform, value) }

    if (typeof value === 'object') { return inject(value, transform) }

    // return value;
  }

  for (let key in it) { copy[key] = cycle(key, it[key]) }

  return copy
}

export {inject as default}

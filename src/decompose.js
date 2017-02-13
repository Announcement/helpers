import attempt from './attempt'

/**
 * Applies functions to a value and moves down the chain if possible
 *
 * @function decompose
 *
 * @see exists
 * @see attempt
 * @see array$
 *
 * @param {Array} array - list of functions to be applied
 * @param {Object} initial - optional initial item
 *
 * @return Object
 */
function decompose (array, initial) {
  let composer = (previous, current) => attempt(current, previous)
  let reducer = (it) => array.reduce(composer, initial || it)

  return initial ? reducer(initial) : reducer
}

export {decompose as default}

import attempt from './attempt'

/**
 * Applies functions to a value and moves down the chain if possible.
 *
 * @function decompose
 *
 * @see exists
 * @see attempt
 * @see array
 *
 * @param {Array} array - List of functions to be applied.
 * @param {Object} initial - Optional initial item.
 *
 * @returns {Object} Mutated version of the initial value.
 */
export default function (array, initial) {
  let composer = (previous, current) => attempt(current, previous)
  let reducer = it => array.reduce(composer, initial || it)

  return initial ? reducer(initial) : reducer
}

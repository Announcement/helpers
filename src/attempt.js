import array from './array'
import single from './single'
import exists from './exists'

/**
 * Attempts to apply mutation to subject.
 *
 * @function attempt
 *
 * @see array
 * @see single
 * @see exists
 *
 * @param {Function} mutation - Mutator function to be called on the subject.
 * @param {Object} subject - Any input that should be mutated.
 *
 * @returns {Object} Subject unless mutation can be applied.
 */
export default function (mutation, subject) {
  var parameters
  var result

  let apply = (method, parameters) => method.apply(this, parameters)
  let valid = it => exists(it) && single(it)

  parameters = array(arguments).slice(1)
  result = apply(mutation, parameters)

  return valid(result) || valid(parameters)
}

import array from './array'

/**
 * Attempts to apply mutation to subject, return unmodified on failure
 *
 * @function attempt
 *
 * @see array
 *
 * @param {Function} mutation - mutator function to be called on the subject
 * @param {Object} subject - any input that should be mutated
 *
 * @return {Object}
 */
function attempt (mutation, subject) {
  let parameters
  let alternative
  let response

  parameters = array(arguments).slice(1)
  alternative = parameters.length === 1 ? parameters[0] : parameters

  response = mutation.apply(this, parameters)

  return response || alternative
}

export {attempt as default}

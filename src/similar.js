/**
 * Check if they're similar in origin (type & constructor).
 *
 * @function similar
 *
 * @param {Object} reference - For comparison reference.
 * @param {Object} object - To be compared.
 *
 * @returns {boolean} True if they have the same type and constructor.
 */
function similar (reference, object) {
  let typesMatch
  let constructorsMatch

  constructorsMatch = reference.constructor === object.constructor
  typesMatch = typeof reference === typeof object

  return typesMatch && constructorsMatch
}

export { similar as default }

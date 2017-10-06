/**
 * Checks to see if an item exists.
 *
 * @function exists
 *
 * @param {Object} it - The item in question of existance.
 *
 * @returns {boolean} True, unless it is null or undefined.
 */
function exists (it) {
  return it !== undefined && it !== null
}

export {exists as default}

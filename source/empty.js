/**
 * Check to see if an item is null or undefined.
 *
 * @function empty
 *
 * @param {Object} it - The item in question of existance.
 *
 * @returns {boolean} False, unless it is null or undefiend.
 */
export default function (it) {
  return it === undefined || it === null
}

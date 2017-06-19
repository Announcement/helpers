/**
 * Lazy way of turning an item into an Array.
 *
 * @function array
 *
 * @param {Object} it - Array like object.
 *
 * @returns {Array} Implicit array object.
 */
export default function (it) {
  return Array.prototype.slice.call(it, 0)
}

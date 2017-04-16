/**
 * Lazy way of turning an item into an Array
 * @function array
 *
 * @param {Object} it - Array like object
 *
 * @return {Array} - implicit array object
 */
function array (it) {
  return Array.prototype.slice.call(it, 0)
}

export {array as default}

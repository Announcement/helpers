'use strict'

/**
 * Lazy way of turning an item into an Array.
 *
 * @function array
 *
 * @param {Object} it - Array like object.
 *
 * @returns {Array} Implicit array object.
 */

var array = function (it) {
  return Array.prototype.slice.call(it, 0)
}

module.exports = array

//# sourceMappingURL=map/array.js.map

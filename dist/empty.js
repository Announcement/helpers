'use strict'

/**
 * Check to see if an item is null or undefined.
 *
 * @function empty
 *
 * @param {Object} it - The item in question of existance.
 *
 * @returns {boolean} False, unless it is null or undefiend.
 */

var empty = function (it) {
  return it === undefined || it === null
}

module.exports = empty

//# sourceMappingURL=map/empty.js.map

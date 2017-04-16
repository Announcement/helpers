"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Lazy way of turning an item into an Array
 * @function array
 *
 * @param {Object} it - Array like object
 *
 * @return {Array} - implicit array object
 */
function array(it) {
  return Array.prototype.slice.call(it, 0);
}

exports.default = array;

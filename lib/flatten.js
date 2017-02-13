"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Recursively brings arrays to the highest level
 *
 * @function flatten
 *
 * @param {Array.<Array>} array - container of the set
 *
 * @return Array
 */
function flatten(array) {
  var isArray = void 0;
  var toArray = void 0;
  var fromArray = void 0;

  isArray = function isArray(it) {
    return it.constructor === Array;
  };
  toArray = function toArray(it) {
    return isArray(it) ? it : [it];
  };
  fromArray = function fromArray(a, b) {
    return a.concat(b);
  };

  while (array.some(isArray)) {
    array = array.map(toArray).reduce(fromArray);
  }

  return array;
}

exports.default = flatten;
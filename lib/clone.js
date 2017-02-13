"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Clones an object
 *
 * @function clone
 *
 * @param {Object} object - object to be cloned
 *
 * @return {Object}
 */
function clone(object) {
  return Object.assign({}, object);
}

exports.default = clone;
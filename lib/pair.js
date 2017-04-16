"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Pairs an object into a set of {key, value} arrays
 *
 * @function pair
 *
 * @param {Object} object - collection to be paired
 *
 * @return {Array.<{name: string, value}>}
 */
function pair(object) {
  return Object.keys(object).map(function (key) {
    return { key: key, value: object[key] };
  });
}

exports.default = pair;

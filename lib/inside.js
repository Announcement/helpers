'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Detects if the needle is in the haystack.
 * @function inside
 *
 * @param {Object|Array} haystack - what we are looking in
 * @param {Object} needle - strict equal comparison compatible
 *
 * @return {Boolean} Whether or not the value could be located
 */
function inside(haystack, needle) {
  var toValues = function toValues(object) {
    return function (key) {
      return object[key];
    };
  };
  var isArray = function isArray(it) {
    return it instanceof Array;
  };
  var isObject = function isObject(it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object';
  };
  var values = function values(it) {
    return Object.keys(it).map(toValues(it));
  };

  var areInside = function areInside(it) {
    return inside(it, needle);
  };

  var insideArray = function insideArray() {
    return haystack.some(areInside);
  };
  var insideObject = function insideObject() {
    return values(haystack).some(areInside);
  };

  return haystack === needle || isArray(haystack) && insideArray(haystack, needle) || isObject(haystack) && insideObject(haystack, needle);
}

// exports.inside = inside

exports.default = inside;

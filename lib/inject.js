'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _attempt = require('./attempt');

var _attempt2 = _interopRequireDefault(_attempt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Injects a transformer into each element of a collection
 *
 * @name inject(it, transformer)
 *
 * @see attempt
 *
 * @param {Object} it - collection
 * @param {Function} tranform - mutator function
 *
 * @return {Object.<string, Function>}
 */
function inject(it, transform) {
  var copy = {};

  function cycle(key, value) {
    if (value === copy) {
      return false;
    }

    if (typeof value === 'function') {
      return (0, _attempt2.default)(transform, value);
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      return inject(value, transform);
    }

    // return value;
  }

  for (var key in it) {
    copy[key] = cycle(key, it[key]);
  }

  return copy;
}

exports.default = inject;

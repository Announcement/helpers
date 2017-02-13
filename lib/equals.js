'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _has = require('./has');

var _has2 = _interopRequireDefault(_has);

var _pair = require('./pair');

var _pair2 = _interopRequireDefault(_pair);

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Compares reference object to another object
 *
 * @function equals
 *
 * @see has
 * @see pair
 *
 * @param {Object} reference - what should be compared to
 * @param {Object} object - what we are comparing
 *
 * @return {boolean}
 */
function equals(r, o) {
  // Are they of the same type?
  if ((typeof r === 'undefined' ? 'undefined' : _typeof(r)) !== (typeof o === 'undefined' ? 'undefined' : _typeof(o)) || r.constructor !== o.constructor) {
    return false;
  }

  // Do we need to check recursively?
  if (r.constructor !== Object) {
    return r === o;
  }

  return (0, _flatten2.default)([(0, _pair2.default)(r), (0, _pair2.default)(o)]).every(function (item) {
    return (0, _has2.default)(r)(item.key) && (0, _has2.default)(o)(item.key) && equals(r[item.key], o[item.key]);
  });
}

exports.default = equals;
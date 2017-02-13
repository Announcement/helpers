'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Curried shortcut to hasOwnProperty
 *
 * @function has
 *
 * @param {Object} object - collection containing property
 * @param {String} property - property name to be checked
 *
 * @return {boolean}
 */

var has = (0, _curry2.default)(function (object, property) {
  return object.hasOwnProperty(property);
});

exports.default = has;
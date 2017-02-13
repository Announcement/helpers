'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _inject = require('./inject');

var _inject2 = _interopRequireDefault(_inject);

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _negated = require('./negated');

var _negated2 = _interopRequireDefault(_negated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prepares function collection by currying and adding a not chain
 *
 * @name prepare(it)
 *
 * @see inject
 * @see negated$
 * @see curry$
 *
 * @param {Object.<string, Function>} it - collection of functions
 *
 * @return {Object.<string, Function>} - curried functions object
 */
function prepare(it) {
  var not = void 0,
      tmp = void 0;

  not = (0, _inject2.default)(it, _negated2.default);
  not = (0, _inject2.default)(not, _curry2.default);
  tmp = (0, _inject2.default)(it, _curry2.default);

  tmp.not = not;

  return tmp;
}

exports.default = prepare;
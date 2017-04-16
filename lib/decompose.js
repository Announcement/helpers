'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _attempt = require('./attempt');

var _attempt2 = _interopRequireDefault(_attempt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies functions to a value and moves down the chain if possible
 *
 * @function decompose
 *
 * @see exists
 * @see attempt
 * @see array$
 *
 * @param {Array} array - list of functions to be applied
 * @param {Object} initial - optional initial item
 *
 * @return Object
 */
function decompose(array, initial) {
  var composer = function composer(previous, current) {
    return (0, _attempt2.default)(current, previous);
  };
  var reducer = function reducer(it) {
    return array.reduce(composer, initial || it);
  };

  return initial ? reducer(initial) : reducer;
}

exports.default = decompose;

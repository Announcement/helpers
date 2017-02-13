'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _array = require('./array');

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Attempts to apply mutation to subject, return unmodified on failure
 *
 * @function attempt
 *
 * @see array
 *
 * @param {Function} mutation - mutator function to be called on the subject
 * @param {Object} subject - any input that should be mutated
 *
 * @return {Object}
 */
function attempt(mutation, subject) {
  var parameters = void 0;
  var alternative = void 0;
  var response = void 0;

  parameters = (0, _array2.default)(arguments).slice(1);
  alternative = parameters.length === 1 ? parameters[0] : parameters;

  response = mutation.apply(this, parameters);

  return response || alternative;
}

exports.default = attempt;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _combine = require('./combine');

var _combine2 = _interopRequireDefault(_combine);

var _array = require('./array');

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a modified function with lazy option assocations
 *
 * @function curry
 *
 * @param {Function} method - function to be curried
 *
 * @return {Function} curried functions
 */
function curry(method) {
  /**
  * Generated method through currying, allowing chainibility
  * @function transform
  *
  * @see combine
  * @this
  *
  * @param {Array} params - arguments array
  *
  * @return {Object} piped output from source curry method
  */
  function transform(params) {
    var context = void 0;

    return function () {
      for (var _len = arguments.length, input = Array(_len), _key = 0; _key < _len; _key++) {
        input[_key] = arguments[_key];
      }

      var args = (0, _combine2.default)(params, (0, _array2.default)(arguments));

      context = context || this;

      if (args.length < method.length || args.some(function (it) {
        return it === undefined;
      })) {
        return transform(args);
      } else {
        return method.apply(context, args);
      }
    };
  }
  return method.length <= 1 ? method : transform([]);
}

exports.default = curry;
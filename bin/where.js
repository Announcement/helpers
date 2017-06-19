'use strict';

/**
 * Appends values to an Array,
 * but first replaces undefined values before adding to the end
 *
 * @function combine
 *
 * @param {Array} array - list of existing items
 * @param {Array} values - proposed additions to the lsit
 *
 * @return {Array} - collective array
 */
function combine(array, values) {
  var index = void 0;

  array = array.concat([]);

  while ((index = array.indexOf(undefined)) !== -1 && values.length > 0) {
    array[index] = values.shift();
  }

  return array.concat(values);
}

/**
 * Lazy way of turning an item into an Array
 * @function array
 *
 * @param {Object} it - Array like object
 *
 * @return {Array} - implicit array object
 */
function array(it) {
  return Array.prototype.slice.call(it, 0);
}

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

      var args = combine(params, array(arguments));

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

/**
 * useful inside of a pipeline
 * @method where
 * @version 3.0.0
 *
 * @param {Object.<string, string>} search - object with properties to match
 *
 * @return {boolean}
 */
function where(reference, object) {
  var keys;
  var result;

  var every = function every(key) {
    return reference[key] === object[key];
  };

  keys = Object.keys(reference);
  result = keys.every(every);

  return result;
}

var _where = curry(where);

module.exports = _where;
//# sourceMappingURL=where.js.map

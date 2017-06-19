'use strict';

/**
 * Checks to see if an item exists (isn't null or undefined)
 * @function exists
 *
 * @param {Object} it - the item in question of existance
 *
 * @return {boolean}
 */
function exists(it) {
  return it !== undefined && it !== null;
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

  parameters = array(arguments).slice(1);
  alternative = parameters.length === 1 ? parameters[0] : parameters;

  response = mutation.apply(this, parameters);

  return response || alternative;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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
      return attempt(transform, value);
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
 * Returns a modified version of a function with negated boolean output
 *
 * @function negated
 *
 * @param {Function} it - method to be negated
 *
 * @return {Function}
 */
function negated(it) {
  return function () {
    return !it.apply(this, arguments);
  };
}

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

  not = inject(it, negated);
  not = inject(not, curry);
  tmp = inject(it, curry);

  tmp.not = not;

  return tmp;
}

var is = prepare({ existent: exists });

module.exports = is;
//# sourceMappingURL=selfish.js.map

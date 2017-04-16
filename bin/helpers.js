'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
 * Curried shortcut to hasOwnProperty
 *
 * @function has
 *
 * @param {Object} object - collection containing property
 * @param {String} property - property name to be checked
 *
 * @return {boolean}
 */

var has = curry(function (object, property) {
  return object.hasOwnProperty(property);
});

/**
 * Pairs an object into a set of {key, value} arrays
 *
 * @function pair
 *
 * @param {Object} object - collection to be paired
 *
 * @return {Array.<{name: string, value}>}
 */
function pair(object) {
  return Object.keys(object).map(function (key) {
    return { key: key, value: object[key] };
  });
}

/**
 * Recursively brings arrays to the highest level
 *
 * @function flatten
 *
 * @param {Array.<Array>} array - container of the set
 *
 * @return Array
 */
function flatten(array) {
  var isArray = void 0;
  var toArray = void 0;
  var fromArray = void 0;

  isArray = function isArray(it) {
    return it.constructor === Array;
  };
  toArray = function toArray(it) {
    return isArray(it) ? it : [it];
  };
  fromArray = function fromArray(a, b) {
    return a.concat(b);
  };

  while (array.some(isArray)) {
    array = array.map(toArray).reduce(fromArray);
  }

  return array;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

  return flatten([pair(r), pair(o)]).every(function (item) {
    return has(r)(item.key) && has(o)(item.key) && equals(r[item.key], o[item.key]);
  });
}

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

var element = function element(it) {
  return it.nodeType === document.ELEMENT_NODE;
};

var fragment = function fragment(it) {
  return it.nodeType === document.DOCUMENT_FRAGMENT_NODE;
};

var text = function text(it) {
  return it.nodeType === document.TEXT_NODE;
};

var is = prepare({
  element: element,
  fragment: fragment,
  text: text,
  inside: inside,
  equal: equals,
  existent: exists
});



var is$1 = Object.freeze({
	default: is,
	element: element,
	fragment: fragment,
	text: text,
	equal: equals,
	existent: exists
});

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
    return attempt(current, previous);
  };
  var reducer = function reducer(it) {
    return array.reduce(composer, initial || it);
  };

  return initial ? reducer(initial) : reducer;
}

var as = {
  array: array,
  pair: pair,
  method: curry,
  flatten: flatten,
  decomposed: decompose,
  attempt: attempt
};



var as$1 = Object.freeze({
	default: as,
	array: array,
	pair: pair,
	method: curry,
	flatten: flatten,
	decomposed: decompose,
	attempt: attempt
});

/** module helpers */
// let helpers = {is, as}
var are = is$1;

// clone,
// combine,
// has,
// inject,
// negated,
// prepare

exports.is = is$1;
exports.are = are;
exports.as = as$1;

//# sourceMappingURL=helpers.js.map
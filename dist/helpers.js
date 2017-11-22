'use strict';

/**
 * Check if they're similar in origin (type & constructor).
 *
 * @function similar
 *
 * @param {Object} reference - For comparison reference.
 * @param {Object} object - To be compared.
 *
 * @returns {boolean} True if they have the same type and constructor.
 */
function similar(reference, object) {
  let typesMatch;
  let constructorsMatch;

  constructorsMatch = reference.constructor === object.constructor;
  typesMatch = typeof reference === typeof object;

  return typesMatch && constructorsMatch;
}

// import has from './has' // hasOwnProperty
// import pair from './pair' // {key: value} => [{key: key, value: value}]
// import flatten from './flatten' // [[[[1]], 2]] => [1, 2]
var equal = function (reference, object) {
  if (!similar(reference, object)) {
    return false;
  }
  // this is probably broken,
  // this `returns true` line is added just to pass linting, as is most likely
  // not the expected behavior and therefore you should not use equals.js
  // or any of it's dependents.
  return true;
  // if (reference.constructor !== Object) {
  //   return reference === object
  // }

  // return flatten([
  //   pair(reference),
  //   pair(object)
  // ])
  // .every(item => {
  //   return has(reference)(item.key) &&
  //     has(object)(item.key) &&
  //     equals(reference[item.key], object[item.key])
  // })
};
// function equals (r, o) {
//   // Are they of the same type?
//   if (typeof r !== typeof o || r.constructor !== o.constructor) {
//     return false
//   }
//
//   // Do we need to check recursively?
//   if (r.constructor !== Object) {
//     return r === o
//   }
//
//   return flatten([
//     pair(r),
//     pair(o)
//   ])
//   .every(item => {
//     return has(r)(item.key) &&
//       has(o)(item.key) &&
//       equals(r[item.key], o[item.key])
//   })
// }
//
// export default equals

// export default function () {
//   // this is done to prevent scope/global leakage
//   return equals.apply(this, arguments)
//
//   /**
//    * Compares reference object to another object.
//    *
//    * @function equals
//    *
//    * @see has
//    * @see pair
//    *
//    * @param {Object} reference - What should be compared to.
//    * @param {Object} object - That matches the reference.
//    *
//    * @returns {boolean} True, unless they are not equal.
//    */
//   function equals (reference, object) {
//     return similar(reference, object) && identical(reference, object)
//   }
//
//   /**
//    * Checks to see if two items of the same type and class are the same.
//    *
//    * @function identical
//    *
//    * @param {Object} reference - What should be compared to.
//    * @param {Object} object - A similar object to the reference.
//    *
//    * @returns {boolean} True, unless reference, object are different type or constructor.
//    */
//   function identical (reference, object) {
//     return test() || pairs()
//
//     function test () {
//       let isObject = () => reference.constructor === Object
//       let isEqual = () => reference === object
//
//       return !isObject() && isEqual()
//     }
//
//     function pairs () {
//       let asPair = it => pair(it)
//       let array = [reference, object].map(asPair)
//
//       return flatten(array).every(every)
//     }
//
//     function every (item) {
//       let both = it => has(reference)(it) && has(object)(it)
//       let match = it => equals(reference[it], object[it])
//
//       return !both(item.key) || match(item.key)
//     }
//   }
// }

/**
 * Checks to see if an item exists.
 *
 * @function exists
 *
 * @param {Object} it - The item in question of existance.
 *
 * @returns {boolean} True, unless it is null or undefined.
 */
function exists(it) {
  return it !== undefined && it !== null;
}

/**
 * Lazy way of turning an item into an Array.
 *
 * @function array
 *
 * @param {Object} it - Array like object.
 *
 * @returns {Array} Implicit array object.
 */
var array = function (it) {
  return Array.prototype.slice.call(it, 0);
};

var array$1 = Object.freeze({
	default: array
});

/**
 * Get the type of an object, properly.
 *
 * @function check
 *
 * @param {Object} it - Item to get type of.
 *
 * @returns {string} Should display the human name of the Object.
 */
function check(it) {
  return Object.prototype.toString.call(it).slice(8, -1);
}

/**
 * Dismantles unnecissary lists.
 *
 * @function single
 * @version 2
 *
 * @see check
 *
 * @param {Array} list - List of items.
 *
 * @returns {Array|Object} The only item or entire list.
 */
function single(list) {
  var result;

  let isArray = it => check(it) === 'Array';
  let isLength = it => it.length === 1;
  let alone = it => isArray(it) && isLength(it);

  result = alone(list) ? list.shift() : list;

  return result;
}

/**
 * Attempts to apply mutation to subject.
 *
 * @function attempt
 *
 * @see array
 * @see exists
 * @see single
 *
 * @param {Function} mutation - Mutator function to be called on the subject.
 * @param {Object} subject - Any input that should be mutated.
 *
 * @returns {Object} Subject unless mutation can be applied.
 */
var attempt = function (mutation, subject) {
  var parameters;
  var result;

  let apply = (method, parameters) => method.apply(this, parameters);
  let valid = it => exists(it) && single(it);

  parameters = array(arguments).slice(1);
  result = apply(mutation, parameters);

  return valid(result) || valid(parameters);
};

var attempt$1 = Object.freeze({
	default: attempt
});

/**
 * Injects a transformer into each element of a collection.
 *
 * @function inject
 *
 * @see attempt
 *
 * @param {Object.<string, Function>} it - Collection of functions.
 * @param {Function} transform - Mutator function to run through each of the functions in it.
 *
 * @returns {Object.<string, Function>} All it functions, but mutated via transform.
 */
function inject(it, transform) {
  var copy;
  var keys;

  let isObject = it => typeof it === 'object' && it.constructor.name === 'Object';

  let isFunction = it => typeof it === 'function' && it.constructor.name === 'Function';

  let forObject = it => isObject(it) && inject(it, transform);

  let forFunction = it => isFunction(it) && attempt(transform, it);

  keys = Object.keys(it);
  copy = {};

  keys.forEach(forEach);

  return copy;

  function forEach(key) {
    var value;

    value = it[key];

    value = attempt(forObject, value);
    value = attempt(forFunction, value);

    copy[key] = value;
  }
}

/**
 * Appends values to an Array,
 * but first replaces undefined values before adding to the end.
 *
 * @function combine
 *
 * @param {Array} array - List of existing items.
 * @param {Array} values - Proposed additions to the list.
 *
 * @returns {Array} - Collective array.
 */
var combine = function (array, values) {
  let index;

  array = array.concat([]);

  while ((index = array.indexOf(undefined)) !== -1 && values.length > 0) {
    array[index] = values.shift();
  }

  return array.concat(values);
};

/**
 * Check to see if an item is null or undefined.
 *
 * @function empty
 *
 * @param {Object} it - The item in question of existance.
 *
 * @returns {boolean} False, unless it is null or undefiend.
 */
var empty = function (it) {
  return it === undefined || it === null;
};

/**
 * Returns a modified function with lazy option assocations.
 *
 * @function curry
 *
 * @see combine
 * @see array
 * @see empty
 *
 * @param {Function} method - Function to be curried.
 *
 * @returns {Function} Curried functions.
 */
var curry = function (method) {
  let enough = input => input.length >= method.length;
  let missing = input => input.some(empty);
  let ready = it => enough(it) && !missing(it);

  return method.length <= 1 ? method : transform([]

  /**
   * Generated method through currying, allowing chainibility.
   *
   * @function transform
   *
   * @param {Array} parameters - Array of arguments.
   *
   * @returns {(Function|Object)} Intercepted output piped from source curry method.
   */
  );function transform(parameters) {
    var inputs;
    var context;

    let results = () => method.apply(context, inputs);
    let update = it => context || it;
    let fetch = it => !ready(it) ? transform(it) : results();

    return callback;

    /**
     * Interception layer to revert back to transform if data is missing.
     *
     * @function callback
     *
     * @param {...Array} input - All of the variables to be accepted by method.
     *
     * @returns {Object} Output of the source curry method.
     **/
    function callback(...input) {
      var response;

      inputs = combine(parameters, array(arguments));
      context = update(this);
      response = fetch(inputs);

      return response;
    }
  }
};

var curry$1 = Object.freeze({
	default: curry
});

/**
 * Returns a modified version of a function with negated boolean output.
 *
 * @function negated
 *
 * @param {Function} it - Method to be negated.
 *
 * @returns {Function} Function with inverse output.
 */
function negated(it) {
  return function () {
    return !it.apply(this, arguments);
  };
}

function prepare(it) {
  var not;
  var tmp;

  not = inject(it, negated);
  not = inject(not, curry);
  tmp = inject(it, curry);

  tmp.not = not;

  return tmp;
}

/**
 * Detects if the needle is in the haystack.
 *
 * @function inside
 *
 * @param {Object|Array} haystack - What we are looking in.
 * @param {Object} needle - Strict equal comparison compatible.
 *
 * @returns {boolean} Whether or not the value could be located.
 */
function inside(haystack, needle) {
  let toValues = object => key => object[key];
  let isArray = it => it instanceof Array;
  let isObject = it => typeof it === 'object';
  let values = it => Object.keys(it).map(toValues(it));

  let areInside = it => inside(it, needle);

  let insideArray = () => haystack.some(areInside);
  let insideObject = () => values(haystack).some(areInside);

  let array = () => isArray(haystack) && insideArray(haystack, needle);
  let object = () => isObject(haystack) && insideObject(haystack, needle);
  let matches = () => haystack === needle;
  let search = () => array() || object();

  return matches() || search();
}

const ELEMENT_NODE = 1;
const DOCUMENT_FRAGMENT_NODE = 11;
const TEXT_NODE = 3;

let element = it => it.nodeType === ELEMENT_NODE;
let fragment = it => it.nodeType === DOCUMENT_FRAGMENT_NODE;
let text = it => it.nodeType === TEXT_NODE;

var is = prepare({
  element,
  equal,
  existent: exists,
  fragment,
  inside,
  text,
  check
});

var $is = Object.freeze({
	default: is
});

/**
 * Pairs an object into a set of {key, value} arrays.
 *
 * @function pair
 *
 * @param {Object} object - Collection to be paired.
 *
 * @returns {Array.<{key: string, value}>} An array of the original object key-value pairs.
 */
function pair(object) {
  return Object.keys(object).map(map);

  function map(key) {
    let value = object[key];

    return {
      key,
      value
    };
  }
}



var pair$1 = Object.freeze({
	default: pair
});

/**
 * Recursively brings all arguments of arrays to the highest level.
 *
 * @function flatten
 *
 * @returns {Array} - Flattened array from the given arguments.
 */
function flatten() {
  let array$$1 = array(arguments);
  let isArray;
  let toArray;
  let fromArray;

  isArray = it => it.constructor === Array;
  toArray = it => isArray(it) ? it : [it];
  fromArray = (a, b) => a.concat(b);

  while (array$$1.some(isArray)) {
    array$$1 = array$$1.map(toArray).reduce(fromArray);
  }

  return array$$1;
}



var flatten$1 = Object.freeze({
	default: flatten
});

/**
 * Applies functions to a value and moves down the chain if possible.
 *
 * @function decompose
 *
 * @see attempt
 *
 * @param {Array} array - List of functions to be applied.
 * @param {Object} initial - Optional initial item.
 *
 * @returns {Object} Mutated version of the initial value.
 */
var decompose = function (array, initial) {
  let composer = (previous, current) => attempt(current, previous);
  let reducer = it => array.reduce(composer, initial || it);

  return initial ? reducer(initial) : reducer;
};

var decompose$1 = Object.freeze({
	default: decompose
});



var $as = Object.freeze({
	array: array$1,
	attempt: attempt$1,
	decomposed: decompose$1,
	flatten: flatten$1,
	method: curry$1,
	pair: pair$1
});

var _where;

/**
 * Verifies entry matches. Useful inside of a (filter) pipeline.
 *
 * @function where
 * @version 3.0.0
 *
 * @param {Object.<string, string>} search - Object with entries to match.
 * @param {Object.<string, string>} object - Input item to be tested.
 *
 * @returns {boolean} True if given entries are the same.
 */
function where(search, object) {
  var keys;
  var result;

  let every = key => search[key] === object[key];

  keys = Object.keys(search);
  result = keys.every(every);

  return result;
}

_where = curry(where);

/**
 * Intended to be used with Array.prototype.reduce.
 *
 * @function select
 * @version 3.0.0
 *
 * @param {...string} it - Property to pull from each object.
 *
 * @returns {Function} A callback function for reducing objects to similar objects with only specified properties.
 */
function select(it) {
  let params = flatten(it, array(arguments));
  let isArray = it => it instanceof Array;

  function compliant(it, key) {
    return params.indexOf(key) !== -1 ? it[key] : [it[key]];
  }

  function prepare(it) {
    var key;

    for (key in it) {
      it[key] = compliant(it, key);
    }

    return it;
  }

  function normalize(it) {
    if (!isArray(it)) {
      return [prepare(it)];
    }

    return it;
  }

  function pull(item) {
    var response;

    let forEach = param => {
      response[param] = item[param];
    };

    response = {};

    params.forEach(forEach);

    return response;
  }

  function merge(reference, object) {
    var keys;

    let ensure = key => {
      reference[key] = reference[key] || [];
    };
    let concat = key => {
      reference[key] = reference[key].concat(object[key]);
    };
    let listed = key => params.indexOf(key) === -1;

    keys = Object.keys(object).filter(listed);

    keys.forEach(ensure);
    keys.forEach(concat);

    return reference;
  }

  function append(array$$1, item) {
    var index;
    var query;
    var search;

    query = pull(item);
    search = _where(query);
    index = array$$1.findIndex(search);

    if (index !== -1) {
      array$$1[index] = merge(array$$1[index], item);
    } else {
      array$$1.push(item);
    }

    return array$$1;
  }

  function reducer(previous, current) {
    var array$$1;
    var item;

    array$$1 = normalize(previous);
    item = prepare(current);

    array$$1 = append(array$$1, item);

    return array$$1;
  }

  return reducer;
}

// normal is the most convenient implementation
// filter is the most efficient implementation
// reduce is the most reliable implementation

let unique = {
  normal: curry(function normal(array, value) {
    return array.filter(_where(value)).length > 1;
  }),
  filter: function filter(value, index, array) {
    return array.indexOf(value, index + 1) === -1;
  },
  reduce: function reduce(previous, current) {
    let beforeReduce = it => it instanceof Array ? it : [it];

    previous = beforeReduce(previous);

    if (!previous.find(_where(current))) {
      previous.push(current);
    }

    return previous;
  }
};



var $query = Object.freeze({
	select: select,
	unique: unique,
	get where () { return _where; }
});

exports.are = $is;
exports.as = $as;
exports.is = $is;
exports.query = $query;

// clone,
// combine,
// has,
// inject,
// negated,
// prepare
//# sourceMappingURL=helpers.js.map

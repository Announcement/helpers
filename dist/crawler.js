'use strict'
/**
  * finds the first item that passes a given test, and the results of said test
  * @method first
  *
  * @param {Array} array
  * @param {Function} filter
  *
  * return {Object.<input, output>}
  **/

var _createClass = (function () {
  function defineProperties (target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) { descriptor.writable = true }
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) { defineProperties(Constructor.prototype, protoProps) }
    if (staticProps) { defineProperties(Constructor, staticProps) }
    return Constructor
  }
}())

var _slicedToArray = (function () {
  function sliceIterator (arr, i) {
    var _arr = []
    var _n = true
    var _d = false
    var _e
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value)
        if (i && _arr.length === i) { break }
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return']) { _i['return']() }
      } finally {
        if (_d) { throw _e }
      }
    }
    return _arr
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i)
    } else {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      )
    }
  }
}())

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function first (array, filter) {
  var input
  var output

  array.find(function (value, index, array) {
    input = value
    output = filter(value, index, array)

    return output
  })

  return { input: input, output: output }
}

// import exists from './exists'
// import {forEach} from './loop'
var isArray = function isArray (it) {
  return it.constructor === Array
}
var isObject = function isObject (it) {
  return it.constructor === Object
}

var map = function map (it, callback) {
  var object = Object.assign({}, it)

  var _iteratorNormalCompletion = true
  var _didIteratorError = false
  var _iteratorError

  try {
    for (
      var _iterator = object[Symbol.iterator](), _step;
      !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
      _iteratorNormalCompletion = true
    ) {
      var _ref = _step.value

      var _ref2 = _slicedToArray(_ref, 2)

      var key = _ref2[0]
      var value = _ref2[1]

      object[key] = { input: value, output: callback(value, key, it) }
    }
  } catch (err) {
    _didIteratorError = true
    _iteratorError = err
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return()
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError
      }
    }
  }

  return object
}

function decompose (processors, input) {
  var each = function each (it) {
    return it.test(input)
  }
  var item = first(processors, each)

  console.log(item)

  return !item ? input : item.input.unit(input)
}

var Crawler = (function () {
  function Crawler (method) {
    _classCallCheck(this, Crawler)

    this.method = method
    this.cache = []
  }

  _createClass(Crawler, [
    {
      key: 'unique',
      value: function unique (value) {
        var cache = this.cache

        if (cache.indexOf(value) !== -1) {
          return false
        }

        cache.push(value)
        return true
      }
    },
    {
      key: 'flat',
      value: function flat (it, callback) {
        // const unique = this.unique.bind(this)
        var render = function render (value, key, object) {
          var response = callback(value, key, object)
          console.log(response)
          return response
          // results.push(result)?
        }

        var genericProcessor = function genericProcessor (it) {
          var result = map(it)(render)
          console.log('render processor', result)
          return result
        }

        var processors = [
          { name: 'array', test: isArray, unit: genericProcessor },
          { name: 'object', test: isObject, unit: genericProcessor }
        ]

        var response = decompose(processors, it)
        return response
      }
    },
    {
      key: 'process',
      value: function process (object, callback) {
        var _this = this

        var genericProcessor = function genericProcessor (it) {
          return _this.flat(it, _this.process.bind(_this))
        }

        var processors = [
          { name: 'array', test: isArray, unit: genericProcessor },
          { name: 'object', test: isObject, unit: genericProcessor }
        ]

        var response = decompose(processors, object)

        console.log(response)

        return response
      }
    },
    {
      key: 'descend',
      value: function descend (it) {
        var method = this.method
        var process = this.process.bind(this)

        process(it, method)
      }
    }
  ])

  return Crawler
}())

module.exports = Crawler
// # sourceMappingURL=map/crawler.js.map

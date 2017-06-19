'use strict'

var combine = function combine (array, values) {
  var index = void 0

  array = array.concat([])

  while ((index = array.indexOf(undefined)) !== -1 && values.length > 0) {
    array[index] = values.shift()
  }

  return array.concat(values)
}

var array = function array (it) {
  return Array.prototype.slice.call(it, 0)
}

var empty = function empty (it) {
  return it === undefined || it === null
}

var curry = function curry (method) {
  var enough = function enough (input) {
    return input.length >= method.length
  }
  var missing = function missing (input) {
    return input.some(empty)
  }
  var ready = function ready (it) {
    return enough(it) && !missing(it)
  }

  return method.length <= 1 ? method : transform([])

  function transform (parameters) {
    var inputs
    var context

    var results = function results () {
      return method.apply(context, inputs)
    }
    var update = function update (it) {
      return context || it
    }
    var fetch = function fetch (it) {
      return !ready(it) ? transform(it) : results()
    }

    return callback

    function callback () {
      for (var _len = arguments.length, input = Array(_len), _key = 0; _key < _len; _key++) {
        input[_key] = arguments[_key]
      }

      var response

      inputs = combine(parameters, array(arguments))
      context = update(this)
      response = fetch(inputs)

      return response
    }
  }
}

var has = curry(function (object, property) {
  return object.hasOwnProperty(property)
})

module.exports = has

//# sourceMappingURL=map/has.js.map

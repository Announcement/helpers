'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _where = require('./where')

var _where2 = _interopRequireDefault(_where)

var _array = require('./array')

var _array2 = _interopRequireDefault(_array)

var _flatten = require('./flatten')

var _flatten2 = _interopRequireDefault(_flatten)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function select (it) {
  let params = (0, _flatten2.default)(it, (0, _array2.default)(arguments))
  let isArray = it => it instanceof Array

  function compliant (it, key) {
    return params.indexOf(key) !== -1 ? it[key] : [it[key]]
  }

  function prepare (it) {
    var key

    for (key in it) {
      it[key] = compliant(it, key)
    }

    return it
  }

  function normalize (it) {
    if (!isArray(it)) {
      return [prepare(it)]
    }

    return it
  }

  function pull (item) {
    var response

    let forEach = param => {
      response[param] = item[param]
    }

    response = {}

    params.forEach(forEach)

    return response
  }

  function merge (reference, object) {
    var keys

    let ensure = key => {
      reference[key] = reference[key] || []
    }
    let concat = key => {
      reference[key] = reference[key].concat(object[key])
    }
    let listed = key => params.indexOf(key) === -1

    keys = Object.keys(object).filter(listed)

    keys.forEach(ensure)
    keys.forEach(concat)

    return reference
  }

  function append (array, item) {
    var index
    var query
    var search

    query = pull(item)
    search = (0, _where2.default)(query)
    index = array.findIndex(search)

    if (index !== -1) {
      array[index] = merge(array[index], item)
    } else {
      array.push(item)
    }

    return array
  }

  function reducer (previous, current) {
    var array
    var item

    array = normalize(previous)
    item = prepare(current)

    array = append(array, item)

    return array
  }

  return reducer
}

exports.default = select

//# sourceMappingURL=map/select.js.map

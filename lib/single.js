'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

function single (list) {
  var result

  let isArray = it => typeof it === 'object' && it instanceof Array
  let alone = it => isArray(it) && it.length === 1

  result = alone(list) ? list.shift() : list

  return result
}

exports.default = single

//# sourceMappingURL=map/single.js.map

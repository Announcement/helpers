'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.default = function (array, values) {
  let index

  array = array.concat([])

  while ((index = array.indexOf(undefined)) !== -1 && values.length > 0) {
    array[index] = values.shift()
  }

  return array.concat(values)
}

//# sourceMappingURL=map/combine.js.map

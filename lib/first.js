'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

function first (array, filter) {
  var input
  var output

  array.find((value, index, array) => {
    input = value
    output = filter(value, index, array)

    return output
  })

  return { input, output }
}

exports.default = first

//# sourceMappingURL=map/first.js.map

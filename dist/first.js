'use strict'

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

module.exports = first

//# sourceMappingURL=map/first.js.map

'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

function pair (object) {
  return Object.keys(object).map(map)

  function map (key) {
    let value = object[key]

    return {
      key,
      value
    }
  }
}

exports.default = pair

//# sourceMappingURL=map/pair.js.map

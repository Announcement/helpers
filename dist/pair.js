'use strict'

function pair (object) {
  return Object.keys(object).map(map)

  function map (key) {
    var value = object[key]

    return {
      key: key,
      value: value
    }
  }
}

module.exports = pair

//# sourceMappingURL=map/pair.js.map

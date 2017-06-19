'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

function negated (it) {
  return function () {
    return !it.apply(this, arguments)
  }
}

exports.default = negated

//# sourceMappingURL=map/negated.js.map

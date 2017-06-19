'use strict'

function negated (it) {
  return function () {
    return !it.apply(this, arguments)
  }
}

module.exports = negated

//# sourceMappingURL=map/negated.js.map

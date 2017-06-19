'use strict'

function reducer (previous, current) {
  var index
  var array
  var self

  index = arguments[2]
  array = arguments[3]
  self = this

  var nothing = function nothing (it) {
    return it
  }
  var isStarting = function isStarting (it) {
    return index === 0
  }
  var isStopping = function isStopping (it) {
    return array.length - index === 1
  }
  var checkArray = function checkArray (it) {
    return it instanceof Array
  }

  var normalize = function normalize (it) {
    var result

    result = true
    result = result && isStarting(it)
    result = result && checkArray(it)

    return result ? it : [self.map(it)]
  }

  prepare()

  previous.push(self.map(current))

  return isStopping() ? self.wrap(previous) : previous

  function prepare () {
    previous = normalize(previous)
    this.wrap = [self.wrap, nothing].find(nothing)
    this.map = [self.map, nothing].find(nothing)
  }
}

module.exports = reducer

//# sourceMappingURL=map/reduce.js.map

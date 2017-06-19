'use strict'

function reducer (previous, current) {
  var index
  var array
  var self

  index = arguments[2]
  array = arguments[3]
  self = this

  let nothing = it => it
  let isStarting = it => index === 0
  let isStopping = it => array.length - index === 1
  let checkArray = it => it instanceof Array

  let normalize = it => {
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

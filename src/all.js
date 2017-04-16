import curry from './curry'

function $toProperty (property, object) {
  return object[property]
}

function add (x, y) {
  return x + y
}

let toProperty = curry($toProperty)

function allAre (...methods) {
  let length
  let toLength = toProperty('length')
  let toTotal = add

  length = methods
    .map(toLength)
    .reduce(toTotal)

  function prepare (params) {
    let context

    return function (...args) {
      context = context || this
      if (params.length < length) return false
      fromPartial() || fromProxy()
    }
  }

  function fromPartial () {}
  function fromProxy () {}

  return prepare([])
}

export {allAre as default}

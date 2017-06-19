import curry from './curry'

function allAre (...methods) {
  var length

  let toProperty = curry($toProperty)
  let toLength = toProperty('length')
  let toTotal = add

  length = methods.map(toLength).reduce(toTotal)

  return prepare([])

  function prepare (params) {
    var context

    let update = it => context || it
    let enough = () => params.length < length
    let from = () => fromPartial() || fromProxy()

    return function (...args) {
      var result

      context = update(this)
      result = !enough() || from()

      return result
    }
  }

  function fromPartial () {}
  function fromProxy () {}

  function $toProperty (property, object) {
    return object[property]
  }

  function add (x, y) {
    return x + y
  }
}

export { allAre as default }

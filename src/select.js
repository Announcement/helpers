function select (...params) {
  let isArray = it => it instanceof Array

  return function (previous, current) {
    let param = it => param => it[param] === current[param]
    let filter = it => params.every(param(it))

    if (!isArray(previous)) {
      previous = [previous]
    }

    var matches = previous
      .map(map)
      .filter(filter)

    if (matches.length === 0) {
      return previous.concat([current])
    }

    let selected = matches.shift()
    let index = selected._index
    let item = previous[index]

    each(current)(function (value, key) {
      if (params.indexOf(key) !== -1) return

      if (!isArray(item[key]) && params.indexOf(key) === -1) {
        item[key] = [item[key]]
      }

      if (item[key].indexOf(current[key]) === -1) {
        item[key].push(current[key])
      }
    })

    previous[index] = item

    return previous

    function map (value, index) {
      Object.defineProperty(value, '_index', {
        enumerable: false,
        value: index
      })
      return value
    }

    function each (object, method) {
      for (let [key, value] in object) {
        if (!object.hasOwnProperty(key)) {
          continue
        }

        object[key] = method(value, key) || object[key]
      }

      return object
    }
  }
}

export {select as default}

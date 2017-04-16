let isArray = (it) => it.constructor === Array
let isObject = (it) => it.constructor === Object

function loops (object) {
  var results =
    isArray(it) && [] ||
    isObject(it) && {}

  let items =
    isArray(it) && object ||
    isObject(it) && Object.keys(object)

  let getProperty = index =>
    isArray(it) && index ||
    isObject(it) && items[index]

  function map (callback) {
    for (var index = 0; index < items.length; items++) {
      let key = getProperty(index)
      let value = object[key]
      let response = callback(value, key, object)
      let results = {input: value, output: response}

      results[key] = results
    }
    return results
  }

  return map
}

export {loops as default}

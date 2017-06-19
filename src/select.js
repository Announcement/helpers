import where from './where'
import array from './array'
import flatten from './flatten'

/**
 * Intended to be used with Array.prototype.reduce.
 *
 * @function select
 * @version 3.0.0
 *
 * @param {...string} it - Property to pull from each object.
 *
 * @returns {Function} A callback function for reducing objects to similar objects with only specified properties.
 */
function select (it) {
  let params = flatten(it, array(arguments))
  let isArray = it => it instanceof Array

  function compliant (it, key) {
    return params.indexOf(key) !== -1 ? it[key] : [ it[key] ]
  }

  function prepare (it) {
    var key

    for (key in it) {
      it[key] = compliant(it, key)
    }

    return it
  }

  function normalize (it) {
    if (!isArray(it)) {
      return [ prepare(it) ]
    }

    return it
  }

  function pull (item) {
    var response

    let forEach = param => {
      response[param] = item[param]
    }

    response = {}

    params.forEach(forEach)

    return response
  }

  function merge (reference, object) {
    var keys

    let ensure = key => {
      reference[key] = reference[key] || []
    }
    let concat = key => {
      reference[key] = reference[key].concat(object[key])
    }
    let listed = key => params.indexOf(key) === -1

    keys = Object.keys(object).filter(listed)

    keys.forEach(ensure)
    keys.forEach(concat)

    return reference
  }

  function append (array, item) {
    var index
    var query
    var search

    query = pull(item)
    search = where(query)
    index = array.findIndex(search)

    if (index !== -1) {
      array[index] = merge(array[index], item)
    } else {
      array.push(item)
    }

    return array
  }

  function reducer (previous, current) {
    var array
    var item

    array = normalize(previous)
    item = prepare(current)

    array = append(array, item)

    return array
  }

  return reducer
}

// function select2 (...params) {
//   function pull (item) {
//     var response
//
//     let forEach = param => {
//       response[param] = item[param]
//     }
//
//     response = {}
//
//     params.forEach(forEach)
//
//     return response
//   }
//
//   function reducer (previous, current) {
//     previous = previous instanceof Array ? previous : [pull(previous)]
//     current = pull(current)
//     previous.push(current)
//     return previous
//   }
// }
export default select

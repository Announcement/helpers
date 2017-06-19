// // import decompose from './decompose'
//
// function single (list) {
//   var result
//   var length
//
//   length = list.length
//   result = length === 1 ? list.shift() : list
//
//   return result
// }
//
// function array (it) {
//   return Array.prototype.slice.call(it, 0)
// }
//
// function attempt (mutation, subject) {
//   let parameters
//   let alternative
//   let response
//
//   parameters = array(arguments).slice(1)
//   alternative = single(parameters)
//
//   response = mutation.apply(this, parameters)
//
//   return response || alternative
// }
//
// function decompose (array, initial) {
//   let composer = (previous, current) => attempt(current, previous)
//   let reducer = (it) => array.reduce(composer, initial || it)
//
//   return initial ? reducer(initial) : reducer
// }
//
// let isArray = (it) => it.constructor === Array
// let isObject = (it) => it.constructor === Object
//
// function generate (it) {
//   return isArray(it) ? [] : isObject(it) && {}
// }
//
// function prepare (it) {
//   return isArray(it) ? it : isObject(it) && Object.keys(it)
// }
//
// /**
//  *
//  */
// function loop (object) {
//   var results
//   var items
//   var cache
//
//   results = generate(object)
//   items = prepare(object)
//
//   cache = items.map(mapper)
//
//   function mapper (value, index) {
//     return isObject(object) && {key: value, input: object[value]} ||
//       isArray(object) && {key: index, input: value}
//   }
//
//   function respond (callback) {
//     return function (it) {
//       it.response = callback(it.input, it.key, object)
//       return it
//     }
//   }
//
//   function filterProperty (property) {
//     return function (it) {
//       return it[property]
//     }
//   }
//
//   function map (callback) {
//     cache.map(respond(callback)).forEach(forEach)
//
//     return results
//
//     function forEach (it) {
//       results[it.key] = it.response
//     }
//   }
//
//   function search (callback) {
//     cache
//       .map(respond(callback))
//       .filter()
//   }
//
//   function filter (callback) {
//     cache
//       .map(respond(callback))
//       .filter(filterProperty('response'))
//       .map(rebase)
//       .forEach(forEach)
//
//     return results
//
//     function rebase (it, index) {
//       if (isArray(object)) {
//         it.index = index
//       }
//
//       return it
//     }
//
//     function forEach (it) {
//       results[it.key] = it.value
//     }
//   }
//
//   function get (property) {
//     return function (it) {
//       return it[property]
//     }
//   }
//
//   function every (callback) {
//     return cache
//       .map(respond(callback))
//       .every(get('response'))
//   }
//
//   function some (callback) {
//     return cache
//       .map(respond(callback))
//       .some(get('response'))
//   }
//
//   // find
//   // findIndex
//   // indexOf
//   // lastIndexOf
//
//   return {
//     map,
//     filter,
//     some,
//     every,
//     search
//   }
// }
//
// loop({'foo': 'fizz', 'bar': 'buzz'}).map(function (it) { console.log(it) })
// loop(['foo', 'bar']).map(function (it) { console.log(it) })
//
// export {loop as default}
// # sourceMappingURL=map/loop.js.map
'use strict'

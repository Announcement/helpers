// let isArray = it => it instanceof Array
// let asArray = it => !isArray(it) ? [it] : it
// let has = object => property => object.hasOwnProperty(property)
// // let
// function select (...params) {
//   return function (previous, current) {
//     let has = it => current.hasOwnProperty(it) && params.indexOf(it) === -1
//     var response
//
//     response = {}
//
//     if (!(previous instanceof Array))
//       previous = [previous]
//
//     var matches = previous
//       .map((value, index) => {
//         value._index = index
//         return value
//       })
//       .filter(it => params.every(param => it[param] === current[param]))
//
//     if (matches.length !== 0) {
//       let selected = matches.shift()
//       let index = selected._index
//       let item = previous[index]
//
//       for (var key in current) {
//         if (current.hasOwnProperty(key) && params.indexOf(key) === -1) {
//           if (!(item[key] instanceof Array)) {
//             item[key] = [item[key]]
//           }
//           if (typeof item[key] === 'object' && item[key].indexOf(current[key]) === -1)
//             item[key].push(current[key])
//         }
//       }
//
//       previous[index] = item
//     } else {
//       previous.push(current)
//     }
//     return previous
//   }
// }
//
// export {select as default}
"use strict";

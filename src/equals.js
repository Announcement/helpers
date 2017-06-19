// import has from './has' // hasOwnProperty
// import pair from './pair' // {key: value} => [{key: key, value: value}]
// import flatten from './flatten' // [[[[1]], 2]] => [1, 2]
import similar from './similar' // (typeof && constructor) match

export default function (reference, object) {
  if (!similar(reference, object)) {
    return false
  }

  // if (reference.constructor !== Object) {
  //   return reference === object
  // }

  // return flatten([
  //   pair(reference),
  //   pair(object)
  // ])
  // .every(item => {
  //   return has(reference)(item.key) &&
  //     has(object)(item.key) &&
  //     equals(reference[item.key], object[item.key])
  // })
}

// function equals (r, o) {
//   // Are they of the same type?
//   if (typeof r !== typeof o || r.constructor !== o.constructor) {
//     return false
//   }
//
//   // Do we need to check recursively?
//   if (r.constructor !== Object) {
//     return r === o
//   }
//
//   return flatten([
//     pair(r),
//     pair(o)
//   ])
//   .every(item => {
//     return has(r)(item.key) &&
//       has(o)(item.key) &&
//       equals(r[item.key], o[item.key])
//   })
// }
//
// export default equals



// export default function () {
//   // this is done to prevent scope/global leakage
//   return equals.apply(this, arguments)
//
//   /**
//    * Compares reference object to another object.
//    *
//    * @function equals
//    *
//    * @see has
//    * @see pair
//    *
//    * @param {Object} reference - What should be compared to.
//    * @param {Object} object - That matches the reference.
//    *
//    * @returns {boolean} True, unless they are not equal.
//    */
//   function equals (reference, object) {
//     return similar(reference, object) && identical(reference, object)
//   }
//
//   /**
//    * Checks to see if two items of the same type and class are the same.
//    *
//    * @function identical
//    *
//    * @param {Object} reference - What should be compared to.
//    * @param {Object} object - A similar object to the reference.
//    *
//    * @returns {boolean} True, unless reference, object are different type or constructor.
//    */
//   function identical (reference, object) {
//     return test() || pairs()
//
//     function test () {
//       let isObject = () => reference.constructor === Object
//       let isEqual = () => reference === object
//
//       return !isObject() && isEqual()
//     }
//
//     function pairs () {
//       let asPair = it => pair(it)
//       let array = [reference, object].map(asPair)
//
//       return flatten(array).every(every)
//     }
//
//     function every (item) {
//       let both = it => has(reference)(it) && has(object)(it)
//       let match = it => equals(reference[it], object[it])
//
//       return !both(item.key) || match(item.key)
//     }
//   }
// }

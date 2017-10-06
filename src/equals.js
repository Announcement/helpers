import has from './has' // hasOwnProperty
import pair from './pair' // {key: value} => [{key: key, value: value}]
import flatten from './flatten' // [[[[1]], 2]] => [1, 2]
import similar from './similar' // (typeof && constructor) match
import detect from './detect'

export default function equals (reference, object) {
  let tests
  let test
  let result

  let isIterable = it =>
    ['array', 'object'].indexOf(detect(it)) !== -1

  tests = [
    {
      name: 'test similarities',
      test: () => !similar(reference, object),
      unit: () => false
    },
    {
      name: 'test primitives',
      test: () => !isIterable(reference),
      unit: () => reference === object
    },
    {
      name: 'test recursive',
      test: () => isIterable(reference),
      unit: () => list(reference, object).every(every)
    }
  ]

  test = tests.find(find)
  result = test.unit()

  return result

  function find (item) {
    let result

    result = item.test()

    return result
  }

  function list () {
    let list
    let flat

    list = [
      pair(reference),
      pair(object)
    ]

    flat = flatten(list)

    return flat
  }

  function every (item) {
    let result

    result = has(reference, item.key) &&
      has(object, item.key) &&
      equals(reference[item.key], object[item.key])

    return result
  }

  // this is probably broken,
  // this `returns true` line is added just to pass linting, as is most likely
  // not the expected behavior and therefore you should not use equals.js
  // or any of it's dependents.
  // return true
  // if (reference.constructor !== Object) {
  //   return reference === object
  // }

  // return flatten([
  //   pair(reference),
  //   pair(object)
  // ])
  //   .every(item => {
  //     return has(reference)(item.key) &&
  //       has(object)(item.key) &&
  //       equals(reference[item.key], object[item.key])
  //   })
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

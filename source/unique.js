import where from './where'
// import curry from './curry'

// let normal

// normal is the most convenient implementation
// filter is the most efficient implementation
// reduce is the most reliable implementation

// normal = curry(_normal)

// no clue what this is supposed to do,
// reminder of why documentation is so important.
// ... or atleast a good naming scheme.
//
// function _normal (array, value) {
//   return array.filter(where(value)).length > 1
// }
//
// function map (value) {
//   if (value.constructor !== Array)
//     return [value]
//
// }

function filter (value, index, array) {
  return array.indexOf(value, index + 1) === -1
}

function reduce (previous, current) {
  let beforeReduce = it => it instanceof Array ? it : [ it ]

  previous = beforeReduce(previous)

  if (!previous.find(where(current))) {
    previous.push(current)
  }

  return previous
}

export {
  // normal,
  filter,
  reduce
}

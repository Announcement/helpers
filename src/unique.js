import where from './where'
import curry from './curry'

// normal is the most convenient implementation
// filter is the most efficient implementation
// reduce is the most reliable implementation

export default {
  normal: curry(function normal (array, value) {
    return array.filter(where(value)).length > 1
  }),
  filter: function filter (value, index, array) {
    return array.indexOf(value, index + 1) === -1
  },
  reduce: function reduce (previous, current) {
    let beforeReduce = it => it instanceof Array ? it : [ it ]

    previous = beforeReduce(previous)

    if (!previous.find(where(current))) {
      previous.push(current)
    }

    return previous
  }
}

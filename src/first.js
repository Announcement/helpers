/**
  * Finds the first item that passes a given test, and the results of said test.
  *
  * @function first
  *
  * @param {Array} array - Represents the list of items.
  * @param {Function} filter - Represents the method to verify the items.
  *
  * @returns {Object.<input, output>} Given input: (array item) => output: filter(array item).
  */
export default function first (array, filter) {
  var input
  var output

  array.find((value, index, array) => {
    input = value
    output = filter(value, index, array)

    return output
  })

  return { input, output }
}

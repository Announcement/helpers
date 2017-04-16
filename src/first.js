import exists from './exists'

function first (array, filter) {
  for (var index = 0; index < array.length; index++) {
    let input = array[index]
    let output = filter(input, index, array)
    if (exists(output) && output !== false) return {input, output}
  }
}

export {first as default}

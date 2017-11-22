import detect from './detect'
import array from './array'

/**
 * Check if they're similar in origin (type & constructor).
 *
 * @function similar
 *
 * @param {Object} reference - For comparison reference.
 * @param {Object} object - To be compared.
 *
 * @returns {boolean} True if they have the same type and constructor.
 */
export default function similar() {
    let list
    let result

    let previous

    let index

    list = array(arguments).map(detect)
    previous = list.shift()
    result = true

    for (index = 0; index < list.length; index++) run(list[index])

    function run(current) {
        if (previous !== current) {
            index = list.length
            result = false
        }

        previous = current
    }

    return result && previous
}
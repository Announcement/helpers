/**
 * Estimate the type of the object using the toString method.
 */

export default function type(it) {
    let toString
    let string
    let array
    let item
    let region
    let lowercase

    toString = Object.prototype.toString
    string = toString.call(it)
    array = string.split(/\s/)
    item = array[1]
    region = item.slice(0, -1)
    lowercase = region.toLowerCase()

    return lowercase
}
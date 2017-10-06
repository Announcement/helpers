/**
 * Clones an object.
 *
 * @function clone
 *
 * @param {Object} object - The object to be cloned.
 *
 * @returns {Object} The clone of the object.
 */
export default function (object) {
  return Object.assign({}, object)
}

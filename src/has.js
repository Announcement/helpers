import curry from './curry'

/**
 * Curried shortcut to hasOwnProperty.
 *
 * @function has
 *
 * @param {Object} object - Collection containing property.
 * @param {String} property - Property name to be checked.
 *
 * @returns {boolean} False, unless the object contains the property.
 */
let has = curry((object, property) => {
  return object.hasOwnProperty(property)
})

export { has as default }

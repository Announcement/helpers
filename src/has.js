import curry from './curry'

/**
 * Curried shortcut to hasOwnProperty
 *
 * @function has
 *
 * @param {Object} object - collection containing property
 * @param {String} property - property name to be checked
 *
 * @return {boolean}
 */

let has = curry((object, property) => {
  return object.hasOwnProperty(property)
})

export {has as default}

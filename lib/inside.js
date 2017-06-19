'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
/**
 * Detects if the needle is in the haystack.
 *
 * @function inside
 *
 * @param {Object|Array} haystack - What we are looking in.
 * @param {Object} needle - Strict equal comparison compatible.
 *
 * @returns {boolean} Whether or not the value could be located.
 */
function inside (haystack, needle) {
  let toValues = object => key => object[key]
  let isArray = it => it instanceof Array
  let isObject = it => typeof it === 'object'
  let values = it => Object.keys(it).map(toValues(it))

  let areInside = it => inside(it, needle)

  let insideArray = () => haystack.some(areInside)
  let insideObject = () => values(haystack).some(areInside)

  let array = () => isArray(haystack) && insideArray(haystack, needle)
  let object = () => isObject(haystack) && insideObject(haystack, needle)
  let matches = () => haystack === needle
  let search = () => array() || object()

  return matches() || search()
}

exports.default = inside

//# sourceMappingURL=map/inside.js.map

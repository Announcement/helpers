/**
 * Detects if the needle is in the haystack.
 * @function inside
 *
 * @param {Object|Array} haystack - what we are looking in
 * @param {Object} needle - strict equal comparison compatible
 *
 * @return {Boolean} Whether or not the value could be located
 */
function inside (haystack, needle) {
  let toValues = object => key => object[key]
  let isArray = it => it instanceof Array
  let isObject = it => typeof it === 'object'
  let values = it => Object.keys(it).map(toValues(it))

  let areInside = it => inside(it, needle)

  let insideArray = () => haystack.some(areInside)
  let insideObject = () => values(haystack).some(areInside)

  return haystack === needle ||
    isArray(haystack) && insideArray(haystack, needle) ||
    isObject(haystack) && insideObject(haystack, needle)
}

// exports.inside = inside

export {inside as default}

/**
  * Get the type of an object, properly.
  *
  * @function check
  *
  * @param {Object} it - Item to get type of.
  *
  * @returns {string} Should display the human name of the Object.
  */
function check (it) {
  return Object.prototype.toString.call(it).slice(8, -1)
}

export default check

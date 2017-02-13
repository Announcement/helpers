import inject from './inject'
import curry from './curry'
import negated from './negated'

/**
 * Prepares function collection by currying and adding a not chain
 *
 * @name prepare(it)
 *
 * @see inject
 * @see negated$
 * @see curry$
 *
 * @param {Object.<string, Function>} it - collection of functions
 *
 * @return {Object.<string, Function>} - curried functions object
 */
function prepare (it) {
  let not, tmp

  not = inject(it, negated)
  not = inject(not, curry)
  tmp = inject(it, curry)

  tmp.not = not

  return tmp
}

export {prepare as default}

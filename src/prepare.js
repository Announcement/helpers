import inject from './inject'
import curry from './curry'
import negated from './negated'

function prepare (it) {
  var not
  var tmp

  not = inject(it, negated)
  not = inject(not, curry)
  tmp = inject(it, curry)

  tmp.not = not

  return tmp
}

export default prepare

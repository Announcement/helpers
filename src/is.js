import equal from './equals'
import existent from './exists'
import prepare from './prepare'
import inside from './inside'

const ELEMENT_NODE = 1
const DOCUMENT_FRAGMENT_NODE = 11
const TEXT_NODE = 3

let element = it => it.nodeType === ELEMENT_NODE
let fragment = it => it.nodeType === DOCUMENT_FRAGMENT_NODE
let text = it => it.nodeType === TEXT_NODE

export default prepare({
  element,
  equal,
  existent,
  fragment,
  inside,
  text
})

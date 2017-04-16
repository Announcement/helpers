import equals from './equals'
import exists from './exists'
import prepare from './prepare'
import inside from './inside'

let element = it =>
  it.nodeType === document.ELEMENT_NODE

let fragment = it =>
  it.nodeType === document.DOCUMENT_FRAGMENT_NODE

let text = it =>
  it.nodeType === document.TEXT_NODE

let is = prepare({
  element,
  fragment,
  text,
  inside,
  equal: equals,
  existent: exists
})

export {
  is as default,
  element,
  fragment,
  text,
  equals as equal,
  exists as existent
}

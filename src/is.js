import equals from './equals'
import exists from './exists'
import prepare from './prepare'

let is = prepare({
  element: (object) => {
    return object.nodeType === document.ELEMENT_NODE
  },

  fragment: (object) => {
    return object.nodeType === document.DOCUMENT_FRAGMENT_NODE
  },

  text: (object) => {
    return object.nodeType === document.TEXT_NODE
  },

  equal: equals,
  existent: exists
})

export {is as default}

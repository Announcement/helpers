import equals from './equals'
import exists from './exists'

export default class Compare {
  constructor (reference, polarity = true) {
    this.reference = reference
    this.polarity = polarity
  }

  get not () {
    return new Compare(this.reference, !this.polarity)
  }

  static isElement (object) {
    return object instanceof Element
  }

  static isFragment (object) {
    return object.constructor === DocumentFragment
  }

  static isText (object) {
    return object.constructor === Text
  }

  static isEqual (reference, object) {
    return equals(reference, object)
  }

  static isExistant (object) {
    return exists(object)
  }

  element () {
    return Compare.isElement(this.reference)
  }

  fragment () {
    return Compare.isFragment(this.reference)
  }

  text () {
    return Compare.isText(this.reference)
  }

  equal (it) {
    return Compare.isEqual(this.reference, it)
  }

  existant () {
    return Compare.isExistant(this.reference)
  }
}

'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _equals = require('./equals')

var _equals2 = _interopRequireDefault(_equals)

var _exists = require('./exists')

var _exists2 = _interopRequireDefault(_exists)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

class Compare {
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
    return (0, _equals2.default)(reference, object)
  }

  static isExistant (object) {
    return (0, _exists2.default)(object)
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
exports.default = Compare

//# sourceMappingURL=map/Compare.js.map

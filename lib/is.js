'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _equals = require('./equals')

var _equals2 = _interopRequireDefault(_equals)

var _exists = require('./exists')

var _exists2 = _interopRequireDefault(_exists)

var _prepare = require('./prepare')

var _prepare2 = _interopRequireDefault(_prepare)

var _inside = require('./inside')

var _inside2 = _interopRequireDefault(_inside)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

const ELEMENT_NODE = 1
const DOCUMENT_FRAGMENT_NODE = 11
const TEXT_NODE = 3

let element = it => it.nodeType === ELEMENT_NODE
let fragment = it => it.nodeType === DOCUMENT_FRAGMENT_NODE
let text = it => it.nodeType === TEXT_NODE

exports.default = (0, _prepare2.default)({
  element,
  equal: _equals2.default,
  existent: _exists2.default,
  fragment,
  inside: _inside2.default,
  text
})

//# sourceMappingURL=map/is.js.map

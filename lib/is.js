'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existent = exports.equal = exports.text = exports.fragment = exports.element = exports.default = undefined;

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

var _exists = require('./exists');

var _exists2 = _interopRequireDefault(_exists);

var _prepare = require('./prepare');

var _prepare2 = _interopRequireDefault(_prepare);

var _inside = require('./inside');

var _inside2 = _interopRequireDefault(_inside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element = function element(it) {
  return it.nodeType === document.ELEMENT_NODE;
};

var fragment = function fragment(it) {
  return it.nodeType === document.DOCUMENT_FRAGMENT_NODE;
};

var text = function text(it) {
  return it.nodeType === document.TEXT_NODE;
};

var is = (0, _prepare2.default)({
  element: element,
  fragment: fragment,
  text: text,
  inside: _inside2.default,
  equal: _equals2.default,
  existent: _exists2.default
});

exports.default = is;
exports.element = element;
exports.fragment = fragment;
exports.text = text;
exports.equal = _equals2.default;
exports.existent = _exists2.default;

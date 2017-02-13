'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

var _exists = require('./exists');

var _exists2 = _interopRequireDefault(_exists);

var _prepare = require('./prepare');

var _prepare2 = _interopRequireDefault(_prepare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var is = (0, _prepare2.default)({
  element: function element(object) {
    return object.nodeType === document.ELEMENT_NODE;
  },

  fragment: function fragment(object) {
    return object.nodeType === document.DOCUMENT_FRAGMENT_NODE;
  },

  text: function text(object) {
    return object.nodeType === document.TEXT_NODE;
  },

  equal: _equals2.default,
  existent: _exists2.default
});

exports.default = is;
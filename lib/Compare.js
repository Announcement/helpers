'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _equals = require('./equals');

var _equals2 = _interopRequireDefault(_equals);

var _exists = require('./exists');

var _exists2 = _interopRequireDefault(_exists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Compare = function () {
  function Compare(reference) {
    var polarity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, Compare);

    this.reference = reference;
    this.polarity = polarity;
  }

  _createClass(Compare, [{
    key: 'element',
    value: function element() {
      return Compare.isElement(this.reference);
    }
  }, {
    key: 'fragment',
    value: function fragment() {
      return Compare.isFragment(this.reference);
    }
  }, {
    key: 'text',
    value: function text() {
      return Compare.isText(this.reference);
    }
  }, {
    key: 'equal',
    value: function equal(it) {
      return Compare.isEqual(this.reference, it);
    }
  }, {
    key: 'existant',
    value: function existant() {
      return Compare.isExistant(this.reference);
    }
  }, {
    key: 'not',
    get: function get() {
      return new Compare(this.reference, !this.polarity);
    }
  }], [{
    key: 'isElement',
    value: function isElement(object) {
      return object instanceof Element;
    }
  }, {
    key: 'isFragment',
    value: function isFragment(object) {
      return object.constructor === DocumentFragment;
    }
  }, {
    key: 'isText',
    value: function isText(object) {
      return object.constructor === Text;
    }
  }, {
    key: 'isEqual',
    value: function isEqual(reference, object) {
      return (0, _equals2.default)(reference, object);
    }
  }, {
    key: 'isExistant',
    value: function isExistant(object) {
      return (0, _exists2.default)(object);
    }
  }]);

  return Compare;
}();

exports.default = Compare;
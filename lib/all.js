'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $toProperty(property, object) {
  return object[property];
}

function add(x, y) {
  return x + y;
}

var toProperty = (0, _curry2.default)($toProperty);

function allAre() {
  var length = void 0;
  var toLength = toProperty('length');
  var toTotal = add;

  for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
    methods[_key] = arguments[_key];
  }

  length = methods.map(toLength).reduce(toTotal);

  function prepare(params) {
    var context = void 0;

    return function () {
      context = context || this;
      if (params.length < length) return false;
      fromPartial() || fromProxy();
    };
  }

  function fromPartial() {}
  function fromProxy() {}

  return prepare([]);
}

exports.default = allAre;

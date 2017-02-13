'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _array = require('./array');

var _array2 = _interopRequireDefault(_array);

var _pair = require('./pair');

var _pair2 = _interopRequireDefault(_pair);

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _decompose = require('./decompose');

var _decompose2 = _interopRequireDefault(_decompose);

var _attempt = require('./attempt');

var _attempt2 = _interopRequireDefault(_attempt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var as = {
  array: _array2.default,
  pair: _pair2.default,
  method: _curry2.default,
  flatten: _flatten2.default,
  decomposed: _decompose2.default,
  attempt: _attempt2.default
};

exports.default = as;
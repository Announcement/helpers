'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _exists = require('./exists');

var _exists2 = _interopRequireDefault(_exists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function first(array, filter) {
  for (var index = 0; index < array.length; index++) {
    var input = array[index];
    var output = filter(input, index, array);
    if ((0, _exists2.default)(output) && output !== false) return { input: input, output: output };
  }
}

exports.default = first;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function select() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  var isArray = function isArray(it) {
    return it instanceof Array;
  };

  return function (previous, current) {
    var param = function param(it) {
      return function (param) {
        return it[param] === current[param];
      };
    };
    var filter = function filter(it) {
      return params.every(param(it));
    };

    if (!isArray(previous)) {
      previous = [previous];
    }

    var matches = previous.map(map).filter(filter);

    if (matches.length === 0) {
      return previous.concat([current]);
    }

    var selected = matches.shift();
    var index = selected._index;
    var item = previous[index];

    each(current)(function (value, key) {
      if (params.indexOf(key) !== -1) return;

      if (!isArray(item[key]) && params.indexOf(key) === -1) {
        item[key] = [item[key]];
      }

      if (item[key].indexOf(current[key]) === -1) {
        item[key].push(current[key]);
      }
    });

    previous[index] = item;

    return previous;

    function map(value, index) {
      Object.defineProperty(value, '_index', {
        enumerable: false,
        value: index
      });
      return value;
    }

    function each(object, method) {
      for (var _ref in object) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var value = _ref2[1];

        if (!object.hasOwnProperty(key)) {
          continue;
        }

        object[key] = method(value, key) || object[key];
      }

      return object;
    }
  };
}

exports.default = select;

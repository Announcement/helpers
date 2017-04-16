"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isArray = function isArray(it) {
  return it.constructor === Array;
};
var isObject = function isObject(it) {
  return it.constructor === Object;
};

function loops(object) {
  var results = isArray(it) && [] || isObject(it) && {};

  var items = isArray(it) && object || isObject(it) && Object.keys(object);

  var getProperty = function getProperty(index) {
    return isArray(it) && index || isObject(it) && items[index];
  };

  function map(callback) {
    for (var index = 0; index < items.length; items++) {
      var key = getProperty(index);
      var value = object[key];
      var response = callback(value, key, object);
      var _results = { input: value, output: response };

      _results[key] = _results;
    }
    return results;
  }

  return map;
}

exports.default = loops;

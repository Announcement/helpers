"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function where(search) {
  return function (item) {
    for (var key in search) {
      if (search.hasOwnProperty(key)) {
        if (item[key] !== search[key]) {
          return false;
        }
      }
    }
    return true;
  };
}

exports.default = where;

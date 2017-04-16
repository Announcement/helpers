"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function differences() {
  function arr(a, b) {
    for (var c = 0; c < a.length; c++) {
      var f = a[c];

      for (var d = 0; d < b.length; d++) {
        var g = b[d];
        var _h = differences(c, d);

        console.log(_h);
      }
    }
  }

  function obj(a, b) {
    var ak = Object.keys(a);
    var bk = Object.keys(b);

    var am = [];
    var bm = [];

    var i;

    for (i = 0; i < ak.length; i++) {
      var av = ak[i];

      if (bk.indexOf(av) === -1) {
        bm.push(av);
      }
    }

    for (i = 0; i < bk.length; i++) {
      var bv = ak[i];

      if (ak.indexOf(bv) === -1) {
        am.push(bv);
      }
    }

    var keys = [];
    var collection = ak.concat(bk);

    for (i = 0; i < collection.length; i++) {
      var key = collection[i];

      if (am.indexOf(key) !== -1) {
        return false;
      }

      if (bm.indexOf(key) !== -1) {
        return false;
      }

      if (keys.indexOf(key) !== -1) {
        return false;
      }

      keys.push(key);
    }

    for (i = 0; i < keys.length; i++) {
      var c = differences(a, b);
      console.log(c);
    }
  }

  for (var h = 0; h < arguments.length; h++) {
    var arg0 = arguments[h];
    var current = [];

    for (var j = 0; j < arguments.length; j++) {
      var arg1 = arguments[j];

      if (j === h) {
        continue;
      }

      if ((typeof arg0 === "undefined" ? "undefined" : _typeof(arg0)) !== (typeof arg1 === "undefined" ? "undefined" : _typeof(arg1))) {
        current.push(h + " and " + k + " are different types");
      }

      if (arg0.constructor !== arg1.constructor) {
        current.push(h + " and " + k + " have different constructors");
      }

      if (arg0 === arg1) {
        current.push(h + " and " + k + " have different values");
      }

      if (arg0.constructor === Array) {
        arr(arg0, arg1);
      }

      if (arg0.constructor === Object) {
        obj(arg0, arg1);
      }
    }
  }
}

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Crawler = function () {
  function Crawler(method) {
    _classCallCheck(this, Crawler);

    this.method = method;
  }

  _createClass(Crawler, [{
    key: 'consume',
    value: function consume(it) {
      var object = it.value || it;
      var name = it.name;

      if (object.constructor === Array) {
        for (var index = 0; index < object.length; index++) {
          var item = object[index];
          var response = this.consume({ name: index, value: item });

          object[index] = response;
        }

        return this.method({ name: name, value: object });
      }

      if (object.constructor === Object) {
        var keys = Object.keys(object);

        for (var index = 0; index < keys.length; index++) {
          var key = keys[index];
          var value = object[key];
          var _response = this.consume({ name: key, value: value });

          object[key] = _response;
        }

        return this.method({ name: name, value: object });
      }

      return this.method({ name: name, value: object });
    }
  }]);

  return Crawler;
}();

var a = { b: 'c' };
var b = { b: 'd' };

var dbg = function dbg(it) {
  console.log(a[name], b[name]);return it;
};
var crawler = new Crawler(dbg);

console.log(crawler.consume(a));
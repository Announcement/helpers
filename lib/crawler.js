'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = undefined

var _first = require('./first')

var _first2 = _interopRequireDefault(_first)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

let isArray = it => it.constructor === Array
let isObject = it => it.constructor === Object

let map = (it, callback) => {
  const object = Object.assign({}, it)

  for (let [key, value] of object) {
    object[key] = { input: value, output: callback(value, key, it) }
  }

  return object
}

function decompose (processors, input) {
  let each = it => it.test(input)
  let item = (0, _first2.default)(processors, each)

  console.log(item)

  return !item ? input : item.input.unit(input)
}

class Crawler {
  constructor (method) {
    this.method = method
    this.cache = []
  }

  unique (value) {
    let cache = this.cache

    if (cache.indexOf(value) !== -1) {
      return false
    }

    cache.push(value)
    return true
  }

  flat (it, callback) {
    let render = (value, key, object) => {
      let response = callback(value, key, object)
      console.log(response)
      return response
    }

    let genericProcessor = it => {
      let result = map(it)(render)
      console.log('render processor', result)
      return result
    }

    let processors = [{ name: 'array', test: isArray, unit: genericProcessor }, { name: 'object', test: isObject, unit: genericProcessor }]

    let response = decompose(processors, it)
    return response
  }

  process (object, callback) {
    let genericProcessor = it => {
      return this.flat(it, this.process.bind(this))
    }

    let processors = [{ name: 'array', test: isArray, unit: genericProcessor }, { name: 'object', test: isObject, unit: genericProcessor }]

    let response = decompose(processors, object)

    console.log(response)

    return response
  }

  descend (it) {
    const method = this.method
    const process = this.process.bind(this)

    process(it, method)
  }
}

exports.default = Crawler

//# sourceMappingURL=map/crawler.js.map

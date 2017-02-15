class Crawler {
  constructor (method) {
    this.method = method
  }

  consume (it) {
    let object = it.value || it
    let name = it.name
    var index
    if (object.constructor === Array) {
      for (index = 0; index < object.length; index++) {
        let item = object[index]
        let response = this.consume({name: index, value: item})

        object[index] = response
      }

      return this.method({name, value: object})
    }

    if (object.constructor === Object) {
      let keys = Object.keys(object)

      for (index = 0; index < keys.length; index++) {
        let key = keys[index]
        let value = object[key]
        let response = this.consume({name: key, value: value})

        object[key] = response
      }

      return this.method({name, value: object})
    }

    return this.method({name, value: object})
  }
}

let a = {b: 'c'}
let b = {b: 'd'}

let dbg = it => { console.log(a[it.name], b[it.name]); return it }
let crawler = new Crawler(dbg)

console.log(crawler.consume(a))

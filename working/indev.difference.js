// function differences () {
//   function arr (a, b) {
//     for (var c = 0; c < a.length; c++) {
//       let f = a[c]
//
//       for (var d = 0; d < b.length; d++) {
//         let g = b[d]
//         let h = differences(c, d)
//
//         console.log(h)
//       }
//     }
//   }
//
//   function obj (a, b) {
//     let ak = Object.keys(a)
//     let bk = Object.keys(b)
//
//     let am = []
//     let bm = []
//
//     var i
//
//     for (i = 0; i < ak.length; i++) {
//       let av = ak[i]
//
//       if (bk.indexOf(av) === -1) { bm.push(av) }
//     }
//
//     for (i = 0; i < bk.length; i++) {
//       let bv = ak[i]
//
//       if (ak.indexOf(bv) === -1) { am.push(bv) }
//     }
//
//     let keys = []
//     let collection = ak.concat(bk)
//
//     for (i = 0; i < collection.length; i++) {
//       let key = collection[i]
//
//       if (am.indexOf(key) !== -1) {
//         return false
//       }
//
//       if (bm.indexOf(key) !== -1) {
//         return false
//       }
//
//       if (keys.indexOf(key) !== -1) {
//         return false
//       }
//
//       keys.push(key)
//     }
//
//     for (i = 0; i < keys.length; i++) {
//       let c = differences(a, b)
//       console.log(c)
//     }
//   }
//
//   for (var h = 0; h < arguments.length; h++) {
//     let arg0 = arguments[h]
//     let current = []
//
//     for (var j = 0; j < arguments.length; j++) {
//       let arg1 = arguments[j]
//
//       if (j === h) { continue }
//
//       if (typeof arg0 !== typeof arg1) {
//         current.push(`${h} and ${k} are different types`)
//       }
//
//       if (arg0.constructor !== arg1.constructor) {
//         current.push(`${h} and ${k} have different constructors`)
//       }
//
//       if (arg0 === arg1) {
//         current.push(`${h} and ${k} have different values`)
//       }
//
//       if (arg0.constructor === Array) {
//         arr(arg0, arg1)
//       }
//
//       if (arg0.constructor === Object) {
//         obj(arg0, arg1)
//       }
//     }
//   }
// }

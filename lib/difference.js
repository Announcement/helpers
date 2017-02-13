
// class Difference {
//   constructor(reference) {
//     this.reference = reference
//     this.items = []
//   }
//
//   compare(object) {
//     if (!this.isComparable(object))
//       return this
//
//     if (this.isShallow(object))
//       return this
//   }
//
//   isComparable(object) {
//     let reference = this.reference;
//     if (typeof reference !== typeof object) {
//       let tr = typeof reference;
//       let to = typeof object;
//
//       this.items.push({
//         reference: this.reference,
//         object,
//         title: 'TypeError',
//         description: `Incomparable Types ${tr} and ${to}`
//       })
//
//       return false
//     }
//
//     if (reference.constructor !== object.constructor) {
//       let rc = reference.constructor
//       let oc = object.constructor
//
//       this.items.push({
//         reference,
//         object,
//         title: 'Constructor Mismatch',
//         description: `Incomparable Constructors ${rc} and ${oc}`
//       })
//
//       return false
//     }
//
//     return true
//   }
//
//   isShallow(object) {
//     let reference = this.reference
//
//     if (typeof reference === 'object') {
//       return false
//     }
//
//     if (reference !== object) {
//       this.items.push({
//         reference,
//         object,
//         title: 'Unequal Inputs',
//         description: 'Inputs are not the same'
//       })
//
//       return false
//     }
//   }
//
//   isDeepEqual(object) {
//     let reference = this.reference
//
//     for (let key in object) {
//       if (!this.hasProperties(object))
//         return false
//
//       let difference = new Difference(object[key])
//       let differences = object[key].compare(reference[key])
//
//       this.consume(differences)
//     }
//
//     return true
//   }
//
//   getProperties(object) {
//     let that = item.constructor
//
//     if (that === Array) {
//       return that;
//     }
//
//     if (that === Object) {
//       return Object.keys(that);
//     }
//   }
//
//   hasProperties(object) {
//     let reference = this.reference
//
//     let objectKeys = this.getProperties(object)
//     let referenceKeys = this.getProperties(object)
//
//     function contains(item) {
//
//     }
//
//     (function(list) {
//       var index = 0;
//
//       while (that = list[index++]) {
//
//       }
//
//     }(objectKeys));
//
//     for (var objectKeysIndex = 0; objectKeysIndex < objectKeys.length; objectKeysIndex++) {
//
//     }
//
//   }
//
//   compareIndexes(object) {
//     for (var i = 0; i < object.length; i++) {
//       for (var i = 0; i < reference.length; i++) {
//
//       }
//     }
//
//     for (var h = 0; i < object.length; i++) {
//       for (var kf = 0; i < reference.length; i++) {
//
//       }
//     }
//   }
//
//   compareProperties(object) {
//
//   }
//
//   provide() {
//     return this.items
//   }
//
//   consume(differences) {
//     let consumables = differences.provide()
//
//     var that
//
//     while (that = consumables.shift()) {
//       this.items.push(that)
//     }
//   }
// }
"use strict";
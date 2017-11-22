import {normal, filter, reduce} from '../src/unique'

import {expect} from 'chai'

describe('Unique', function () {
  let array

  beforeEach(function () {
    array = ['a', 'a', 'a']
  })

  // context('#normal()', function () {
  //   it('should be a function', function () {
  //     expect(normal).to.be.a('function')
  //   })
  //
  //   it('should not have duplicates', function () {
  //     console.log(array.map(normal, []))
  //     // expect(['a', 'a'].map(normal).length).to.be.equal(1)
  //
  //     // expect(normal(['a', 'a']))
  //   })
  // })

  context('#filter()', function () {
    it('should be a function', function () {
      expect(filter).to.be.a('function')
    })

    it('should not have duplicates', function () {
      expect(array.filter(filter)).to.be.length(1)
    })
  })

  context('#reduce()', function () {
    it('should be a function', function () {
      expect(reduce).to.be.a('function')
    })

    it('should not have duplicates', function () {
      expect(array.reduce(reduce)).to.be.length(1)
    })
  })
})

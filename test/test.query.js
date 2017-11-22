import * as query from '../src/query'

import {expect} from 'chai'

describe('Query', function () {
  context('#where()', function () {
    it('should be an existent method', function () {
      expect(query.where).to.be.a('function')
    })
  })

  context('#select()', function () {
    it('should be an existent method', function () {
      expect(query.select).to.be.a('function')
    })
  })

  context('#unique', function () {
    it('should be an existent object', function () {
      expect(query.unique).to.be.an('object')
    })
  })
})

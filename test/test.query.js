import * as query from '../src/query'

import {expect} from 'chai'

describe('Query', () => {
  context('#where()', () => {
    it('should be an existent method', () => {
      expect(query.where).to.be.a('function')
    })
  })

  context('#select()', () => {
    it('should be an existent method', () => {
      expect(query.select).to.be.a('function')
    })
  })

  context('#unique', () => {
    it('should be an existent object', () => {
      expect(query.unique).to.be.an('object')
    })
  })
})

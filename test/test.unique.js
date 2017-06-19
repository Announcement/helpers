import unique from '../src/unique'

import {expect} from 'chai'

describe('Unique', () => {
  context('#normal()', () => {
    it('should be a function', () => {
      expect(unique.normal).to.be.a('function')
    })

    it.skip('should not have duplicates', () => {
      expect(['a', 'a'].map(unique.normal).length).to.be.equal(1)
    })
  })

  context('#filter()', () => {
    it('should be a function', () => {
      expect(unique.normal).to.be.a('function')
    })

    it('should not have duplicates', () => {
      expect(['a', 'a', 'a'].filter(unique.filter).length).to.be.equal(1)
    })
  })

  context('#reduce()', () => {
    it('should be a function', () => {
      expect(unique.normal).to.be.a('function')
    })

    it('should not have duplicates', () => {
      expect(['a', 'a', 'a'].reduce(unique.reduce).length).to.be.equal(1)
    })
  })
})

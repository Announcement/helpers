import is from '../src/is.js'
import {expect} from 'chai'

describe('is', function () {
  context('element', function(){
    it('should be an existant property', function () {
      expect(as.array).to.exist
    })
  })

  context('fragment', function() {
    it('should be an existant property', function() {
      expect(as.pair).to.exist
    })
  })

  context('text', function() {
    it('should be an existant property', function() {
      expect(as.method).to.exist
    })
  })

  context('equal', function() {
    it('should be an existant property', function() {
      expect(as.flatten).to.exist
    })
  })

  context('existent', function() {
    it('should be an existant property', function() {
      expect(as.decomposed).to.exist
    })
  })
})

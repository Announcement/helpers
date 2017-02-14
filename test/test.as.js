import * as as from '../src/as.js'
import {expect} from 'chai'

describe('as', function () {
  context('array', function(){
    it('should be an existant property', function () {
      expect(as.array).to.exist
    })
  })

  context('pair', function() {
    it('should be an existant property', function() {
      expect(as.pair).to.exist
    })
  })

  context('method', function() {
    it('should be an existant property', function() {
      expect(as.method).to.exist
    })
  })

  context('flatten', function() {
    it('should be an existant property', function() {
      expect(as.flatten).to.exist
    })
  })

  context('decomposed', function() {
    it('should be an existant property', function() {
      expect(as.decomposed).to.exist
    })
  })

  context('attempt', function() {
    it('should be an existant property', function() {
      expect(as.attempt).to.exist;
    })
  })
})

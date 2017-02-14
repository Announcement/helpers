import helpers from '../src/helpers.js'
import {expect} from 'chai'

describe('helpers', function () {
  context('is', function(){
    it('should be an existant property', function () {
      expect(helpers.is).to.exist
    })
  })

  context('as', function() {
    it('should be an existant property', function() {
      expect(helpers.as).to.exist
    })
  })
})

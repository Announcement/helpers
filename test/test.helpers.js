import {is, as} from '../src/helpers.js'
import {expect} from 'chai'

describe('helpers', function () {
  context('is', function () {
    it('should be an existant property', function () {
      expect(is).to.exist
    })
  })

  context('as', function () {
    it('should be an existant property', function () {
      expect(as).to.exist
    })
  })
})

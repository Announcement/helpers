import * as unit from '../src/as'
import {expect} from 'chai'

describe('As', function () {
  it('should be an object', () => {
    expect(unit).to.be.an('object')
  })

  context('#array', function () {
    it('should be an existant property', function () {
      expect(unit.array).to.exist
    })
  })

  context('#pair', function () {
    it('should be an existant property', function () {
      expect(unit.pair).to.exist
    })
  })

  context('#method', function () {
    it('should be an existant property', function () {
      expect(unit.method).to.exist
    })
  })

  context('#flatten', function () {
    it('should be an existant property', function () {
      expect(unit.flatten).to.exist
    })
  })

  context('#decomposed', function () {
    it('should be an existant property', function () {
      expect(unit.decomposed).to.exist
    })
  })

  context('#attempt', function () {
    it('should be an existant property', function () {
      expect(unit.attempt).to.exist
    })
  })
})

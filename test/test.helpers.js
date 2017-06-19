import * as helpers from '../src/helpers'
import {expect} from 'chai'

describe('Helpers', function () {
  context('#is', function () {
    it('should be an existant property', function () {
      expect(helpers.is).to.exist
    })
  })

  context('#are', function () {
    it('should be an existant property', function () {
      expect(helpers.are).to.exist
    })
  })

  context('#as', function () {
    it('should be an existant property', function () {
      expect(helpers.as).to.exist
    })
  })

  context('#query', function () {
    it('should be an existant property', function () {
      expect(helpers.query).to.exist
    })
  })
})

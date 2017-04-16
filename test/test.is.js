import is from '../src/is.js'
import {expect} from 'chai'

describe('is', function () {
  context('element', function () {
    it('should be an existent property', function () {
      expect(is.element).to.exist
    })
  })

  context('fragment', function () {
    it('should be an existent property', function () {
      expect(is.fragment).to.exist
    })
  })

  context('text', function () {
    it('should be an existent property', function () {
      expect(is.text).to.exist
    })
  })

  context('equal', function () {
    it('should be an existent property', function () {
      expect(is.equal).to.exist
    })
  })

  context('existent', function () {
    it('should be an existent property', function () {
      expect(is.existent).to.exist
    })
  })
})

import unit from '../src/is'
import {expect} from 'chai'

describe('Is', function () {
  context('#not', function () {
    it('should be a generated property', function () {
      expect(unit.not).to.exist
    })
  })

  context('#element', function () {
    it('should be an existent function', function () {
      expect(unit.element).to.be.a('function')
    })

    it('should have an inverse method', function () {
      expect(unit.not.element).to.be.a('function')
    })

    it('should check the nodeType property', () => {
      expect(unit.element({nodeType: 1})).to.be.true
    })
  })

  context('#fragment', function () {
    it('should be an existent function', function () {
      expect(unit.fragment).to.be.a('function')
    })

    it('should have an inverse method', function () {
      expect(unit.not.fragment).to.be.a('function')
    })

    it('should check the nodeType property', () => {
      expect(unit.fragment({nodeType: 11})).to.be.true
    })
  })

  context('#text', function () {
    it('should be an existent function', function () {
      expect(unit.text).to.be.a('function')
    })

    it('should have an inverse method', function () {
      expect(unit.not.text).to.be.a('function')
    })

    it('should check the nodeType property', () => {
      expect(unit.text({nodeType: 3})).to.be.true
    })
  })

  context('#equal', function () {
    it('should be an existent function', function () {
      expect(unit.equal).to.be.a('function')
    })

    it('should have an inverse method', function () {
      expect(unit.not.equal).to.be.a('function')
    })
  })

  context('existent', function () {
    it('should be an existent funciton', function () {
      expect(unit.existent).to.be.a('function')
    })

    it('should have an inverse method', function () {
      expect(unit.not.existent).to.be.a('function')
    })
  })
})

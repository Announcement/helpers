import exists from '../src/exists.js'
import {expect} from 'chai'

describe('exists()', function () {
  it('should be a function', function() {
    expect(exists).to.be.a('function')
  })

  it('should deny null', function () {
    expect(exists(null)).to.be.false
  })

  it('should deny undefined', function () {
    expect(exists(undefined)).to.be.false
  })

  it('should accept a boolean value', function() {
    expect(exists(false)).to.be.true
  })

  it('should accept an empty string', function () {
    expect(exists('')).to.be.true
  })

  it('should accept an empty array', function () {
    expect(exists([])).to.be.true
  })

  it('should accept an empty object', function () {
    expect(exists({})).to.be.true
  })

  it('should accept worthless numbers', function () {
    expect(exists(0)).to.be.true
  })

  it('should accept not a number', function () {
    expect(exists(NaN)).to.be.true
  })
})

import equals from '../src/equals.js'
import {expect} from 'chai'

describe('equals', function () {
  it('should confirm equality in objects', function () {
    expect(equals({foo: 'bar'}, {foo: 'bar'})).to.be.true
  })
  it('should deny inequal values', function () {
    expect(equals({foo: 'bar'}, {foo: 'buzz'})).to.be.false
  })
})

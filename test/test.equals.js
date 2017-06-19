import equals from '../src/equals'
import { expect } from 'chai'

describe('equals()', function () {
  it('should be a function', () => {
    expect(equals).to.be.a('function')
  })

  it('should confirm equality in objects', () => {
    expect(equals({ foo: 'bar' }, { foo: 'bar' })).to.be.true
  })

  it('should deny inequal values', function () {
    expect(equals({ foo: 'bar' }, { foo: 'buzz' })).to.be.false
  })
})

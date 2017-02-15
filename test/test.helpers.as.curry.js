import curry from '../src/curry.js'
import {expect} from 'chai'

describe('curry', function () {
  function f (x, y) { return x + y }
  let g = (x, y) => x * y

  let f1 = curry(f)
  let g1 = curry(g)

  it('should still be callable while waiting for parameters', function () {
    let f2 = f1(1)
    expect(f2).to.be.a('function')
  })

  it('should return the expected result', function () {
    let z = f1(2, 3)
    expect(z).to.be.eql(5)
  })

  it('should also work with arrow functions', function () {
    let z = g1(2, 3)
    expect(z).to.be.eql(6)
  })
})

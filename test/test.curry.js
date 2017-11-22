import curry from '../src/curry'
import {expect} from 'chai'

describe('curry()', function () {
  it('should be a function', function () {
    expect(curry).to.be.a('function')
  })

  it('should return a function', function () {
    let f = function (x, y) { return x + y }
    expect(curry(f)).to.be.a('function')
  })

  it('should be lazy if possible', function () {
    let f = function (x) { return x }
    expect(curry(f)).to.equal(f)
  })

  it('should not immediately call the function', function () {
    let f = function () { return true }
    let g = curry(f)

    expect(g).to.be.a('function')
  })

  it('should still be callable while waiting for parameters', function () {
    let f = function (x, y) { return x + y }
    let g = curry(f)
    let h = g(1)

    expect(h).to.be.a('function')
  })

  it('should return the expected result when called normally', () =>  {
    let f = function (x, y) { return x + y }
    let g = curry(f)

    expect(g(2, 3)).to.be.eql(5)
  })

  it('should return the expected result when called curried', () =>  {
    let f = function (x, y) { return x + y }
    let g = curry(f)
    let h = g(2)


    expect(h(3)).to.be.eql(5)
  })

  it('should return the expected result when called repeatedly', () =>  {
    let f = function (x, y) { return x + y }
    let g = curry(f)
    let h = g(2)

    h(3)

    expect(h(5)).to.be.eql(7)
  })

  it('should have a reusable constructor', () =>  {
    let f = function (x, y) { return x + y }
    let g = curry(f)

    g(2)(3)

    expect(g(4)(5)).to.be.eql(9)
  })

  it('should also work with arrow functions', function () {
    let f = (x, y) => x * y
    let g = curry(f)

    expect(g(2, 3)).to.be.eql(6)
  })
})

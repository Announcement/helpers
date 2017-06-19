import decompose from '../src/decompose.js'
import { expect } from 'chai'

describe('decompose()', function () {
  it('should be a function', () => {
    expect(decompose).to.be.a('function')
  })

  it('should return the expected result', function () {
    let f = x => x + 1
    let result = decompose([ f ], 1)
    expect(result).to.be.eql(2)
  })

  it('should work well with attempts', function () {
    let f = x => x + 1
    let g = x => {
      while (x-- > 0) {}
    }
    let result = decompose([ f, g ], 1)
    expect(result).to.be.eql(2)
  })
  // how does it handle no initial value?
  // how does it handle a dead-end?
})

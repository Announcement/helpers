import attempt from '../src/attempt'
import {expect} from 'chai'

describe('attempt()', function () {
  it('should be a function', function() {
    expect(attempt).to.be.a('function')
  })

  it('should save the result if possible', function () {
    let f = x => -~x
    let result = attempt(f, 1)

    expect(result).to.be.equal(2)
  })

  it('should revert to original input if no result is given', function () {
    let g = () => {}
    let result = attempt(g, 1)
    expect(result).to.be.equal(1)
  })
})

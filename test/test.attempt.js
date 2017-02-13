import attempt from '../src/attempt.js'
import {expect} from 'chai'

describe('attempt', function () {
  let f = x => x + 1
  let g = x => { for(var i = 0; i < g; i++); }
  
  it('should save the result if possible', function () {
    let result = attempt(f, 1)
    expect(result).to.be.eql(2)
  })

  it('should revert to original input if no result is given', function () {
    let result = attempt(g, 1)
    expect(result).to.be.eql(1)
  })
})

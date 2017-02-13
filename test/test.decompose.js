import decompose from '../src/decompose.js'
import {expect} from 'chai'

describe('decompose', function () {
  let f = x => x + 1
  let g = x => { while(x-- > 0); }
  it('should return the expected result', function () {
    let result = decompose([f], 1)
    expect(result).to.be.eql(2)
  })
  it('should work well with attempts', function () {
    let result = decompose([f, g], 1)
    expect(result).to.be.eql(2)
  })
})

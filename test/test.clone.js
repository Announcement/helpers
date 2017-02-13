import clone from '../src/clone.js'
import {expect} from 'chai'

describe('array', function () {
  let sample = {a: 1}

  it('should clone an object', function () {
    let copy = clone(sample);

    expect(copy).to.be.an(typeof sample)
  })

  it('should allow individual mutations', function () {
    let copy = clone(sample)

    copy.a = 2

    expect(sample.a).to.be.eql(1)
  })
})

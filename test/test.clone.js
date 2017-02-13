import clone from '../src/clone.js'
import {expect} from 'chai'

describe('clone', function () {
  let sample = {a: 2}

  it('should clone an object', function () {
    let copy = clone(sample);

    expect(copy).to.be.an(typeof sample)
  })

  it('should allow individual mutations', function () {
    let copy = clone(sample)

    copy.a = 1

    expect(sample.a).to.be.eql(2)
  })
})

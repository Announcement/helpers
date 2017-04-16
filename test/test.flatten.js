import flatten from '../src/flatten.js'
import {expect} from 'chai'

describe('flatten', function () {
  let array = [1, [[2]]]

  it('should sift array values downwards', function () {
    let flattened = flatten(array)

    expect(flattened[1]).to.be.eql(2)
  })
})

import combine from '../src/combine.js'
import {expect} from 'chai'

describe('combine()', function () {
  let shortArray = ['a']
  let longArray = ['b', 'c']
  let fragmentedArray = ['d', undefined, 'f']

  it('should be a function', function () {
    expect(combine).to.be.a('function')
  })

  it('should concatenate arrays', function () {
    let array = combine(shortArray, longArray)

    expect(array.length).to.be.eql(3)
  })

  it('should defragment arrays', function () {
    let array = combine(fragmentedArray, shortArray)

    expect(array.length).to.be.eql(3)
  })
})

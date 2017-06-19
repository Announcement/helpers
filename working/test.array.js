import array from '../src/array.js'
import {expect} from 'chai'

describe('array', function () {
  it('should return with an array', function () {
    var parameters

    parameters = array(arguments)

    expect(parameters).to.be.an('array')
  })
})

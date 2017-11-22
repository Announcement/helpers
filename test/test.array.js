import array from '../src/array'
import {expect} from 'chai'

describe('array()', function () {
  it('should be a function', function () {
    expect(array).to.be.a('function')
  })

  it('should respond to an arguments object', function () {
    expect(array(arguments)).to.not.throw
  })

  it('should return with an array', function () {
    var parameters

    parameters = array(arguments)

    expect(parameters).to.be.an('array')
  })
})

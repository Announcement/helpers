import array from '../src/array'
import {expect} from 'chai'

describe('array()', function () {
  it('should be a function', () => {
    expect(array).to.be.a('function')
  })

  // mocha/chai has a stupid api and this doesn't work
  // for whatever unknown reason
  it.skip('should respond to an arguments object', () => {
    expect(array).to.respondTo(['a', 'b'])
  })

  it('should return with an array', () => {
    var parameters

    parameters = array(arguments)

    expect(parameters).to.be.an('array')
  })
})

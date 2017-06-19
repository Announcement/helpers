import has from '../src/has.js'
import {expect} from 'chai'

describe('has()', function () {
  it('should be a function', () => {
    expect(has).to.be.a('function')
  })

  it('should determine objects containment of a property', function () {
    let owns = has({foo: 'bar'})
    expect(owns('foo')).to.be.true
  })

  it('should determine objects lack of property', function () {
    let owns = has({foo: 'bar'})
    expect(owns('bar')).to.be.false
  })

  it('should not be fooled by prototype properties', function () {
    let owns = has({foo: 'bar'})
    expect(owns('toString')).to.be.false
  })
})

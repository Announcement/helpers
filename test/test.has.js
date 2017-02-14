import has from '../src/has.js'
import {expect} from 'chai'

describe('has', function () {
  let owns = has({foo: 'bar'})

  it('should determine objects containment of a property', function () {
    expect(owns('foo')).to.be.true
  })

  it('should determine objects lack of property', function() {
    expect(owns('bar')).to.be.false
  })

  it('should not be fooled by prototype properties', function() {
    expect(owns('toString')).to.be.false
  })
})

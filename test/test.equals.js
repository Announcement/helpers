import equals from '../src/equals'
import { expect } from 'chai'

describe('equals()', function () {
  let reference

  let emptyObject

  let exactFromStringify
  let exactFromAssign1
  let exactFromAssign2

  let missingProperty

  let differentKey1
  let differentKey2
  let differentValue1
  let differentValue2
  let differentValue3

  let extraProperty

  reference = {'key1': 'value1', 'key2': 'value2'}

  emptyObject = {}

  exactFromStringify = JSON.parse(JSON.stringify(reference))
  exactFromAssign1 = Object.assign(reference)
  exactFromAssign2 = Object.assign({}, reference)

  missingProperty = {'key1': 'value1'}

  differentKey1 = {'key3': 'value1', 'key2': 'value2'}
  differentKey2 = {'key3': 'value1', 'key4': 'value2'}
  differentValue1 = {'key1': 'value3', 'key2': 'value2'}
  differentValue2 = {'key1': 'value3', 'key2': 'value4'}

  extraProperty = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}

  it('should be a function', function () {
    expect(equals).to.be.a('function')
  })

  it('should confirm equality in duplicate object', function () {
    expect(equals(reference, reference)).to.be.true
  })

  it('should confirm equality in object copied with stringify', function () {
    expect(equals(reference, exactFromStringify)).to.be.true
  })

  it('should confirm equality in object copied with assign', function () {
    expect(equals(reference, exactFromAssign1)).to.be.true
  })

  it('should confirm equality in object copied with assign, to a new object', function () {
    expect(equals(reference, exactFromAssign2)).to.be.true
  })

  it('should deny equality if the object is missing a property', function () {
    expect(equals(reference, missingProperty)).to.be.false
  })

  it('should deny equality if the object has a single renamed key', function () {
    expect(equals(reference, differentKey1)).to.be.false
  })

  it('should deny equality when the object has renamed keys', function () {
    expect(equals(reference, differentKey2)).to.be.false
  })

  it('should deny equality when the object has a different value then the reference object property', function () {
    expect(equals(reference, differentValue1)).to.be.false
  })

  it('should deny equality when the object has all different values then the reference object', function () {
    expect(equals(reference, differentValue3)).to.be.false
  })

  it('should deny equality when the object has an extra property', function () {
    expect(equals(reference, extraProperty)).to.be.false
  })

  it('should look deep into objects', function () {
    expect(equals({deep: reference}, {deep: reference})).to.be.true
  })
})

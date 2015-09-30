var expect = require('unexpected')
var mapValues = require('../src/lib/mapValues')

describe('mapValues', function () {
  it('returns array of min to max values', function () {
    expect(mapValues(5, 8), 'to equal', [5, 6, 7, 8])
  })
})

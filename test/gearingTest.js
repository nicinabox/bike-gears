var expect = require('unexpected')
var gearRatio = require('../src/lib/gearRatio')
var gainRatio = require('../src/lib/gainRatio')
var gearInches = require('../src/lib/gearInches')
var development = require('../src/lib/development')
var skidPatches = require('../src/lib/skidPatches')

var values = {
  chainring: 46,
  cog: 16,
  crank: 165,
  wheel_diameter_inches: 27,
}

describe('gearing', () => {
  it('gear ratio should be 2.88', () => {
    expect(gearRatio(values), 'to equal', 2.88)
  });

  it('gain ratio should be 5.92', () => {
    expect(gainRatio(values), 'to equal', 5.92)
  });

  it('gear inches should be 78in', () => {
    expect(gearInches(values), 'to equal', 78)
  });

  it('development should be 6.14m', () => {
    expect(development(values), 'to equal', 6.14)
  });

  it('skid patches should be 8', () => {
    expect(skidPatches(values), 'to equal', 8)
  })

  it('Ambidextrous skid patches should be 16', () => {
    expect(skidPatches(values, true), 'to equal', 16)
  })
});

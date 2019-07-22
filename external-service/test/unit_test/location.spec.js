/* eslint-env mocha */

const chai = require('chai');

const { assert, expect } = chai;
const { requestData } = require('../_helpers/data.helper');
const { Location } = require('./../../src/domain/entities/location');


describe('Unit Test: Create Location entity', () => {
  it('HAPPY: should return location entity', () => {
    const location = new Location(requestData.valid);
    assert.equal(location.latitude, requestData.valid.latitude);
    assert.equal(location.longitude, requestData.valid.longitude);
    assert.equal(location.name, requestData.valid.name);
    assert.equal(location.id, null);
    assert.isNotNull(location.officeDistance);
  });

  it('HAPPY: should return location entity with all values', () => {
    const location = new Location(requestData.fullData);
    assert.equal(location.latitude, requestData.fullData.latitude);
    assert.equal(location.longitude, requestData.fullData.longitude);
    assert.equal(location.name, requestData.fullData.name);
    assert.equal(location.category, requestData.fullData.category);
    assert.equal(location.description, requestData.fullData.description);

    assert.equal(location.id, null);
    assert.isNotNull(location.officeDistance);
  });

  it('SAD: should return location entity with only safe values', () => {
    const location = new Location(requestData.extraData);
    assert.equal(location.latitude, requestData.extraData.latitude);
    assert.equal(location.longitude, requestData.extraData.longitude);
    expect(location).to.not.include(
      {
        noValidAttribute: requestData.extraData.noValidAttribute,
      },
    );

    assert.equal(location.id, null);
    assert.isNotNull(location.officeDistance);
  });

  it('BAD: Should throw error, invalid location coordinates', () => {
    expect(() => new Location(requestData.invalid)).to.throw();
  });

  it('BAD:Should throw error, invalid required fields ', () => {
    expect(() => new Location(requestData.invalid_no_required)).to.throw();
  });
});

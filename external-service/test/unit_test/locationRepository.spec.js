/* eslint-env mocha */
const chai = require('chai');
chai.use(require('chai-as-promised'));

const { expect, assert } = chai;
const { requestData } = require('../_helpers/data.helper');
const { Location } = require('./../../src/domain/entities/location');
const { LocationRepository } = require('./../../src/domain/repositories/locations');

describe('Unit Test: Repository storage Location', () => {
  it('HAPPY: should return location entity', async () => {
    const data = new Location(requestData.valid);
    const location = await LocationRepository.save(data);
    assert.equal(location.latitude, requestData.valid.latitude);
    assert.equal(location.longitude, requestData.valid.longitude);
    assert.notEqual(location.id, null);
    assert.isNotNull(location.officeDistance);
  });

  it('HAPPY: should return location entity with all values', async () => {
    const data = new Location(requestData.fullData);
    const location = await LocationRepository.save(data);
    assert.equal(location.latitude, requestData.fullData.latitude);
    assert.equal(location.longitude, requestData.fullData.longitude);
    assert.equal(location.name, requestData.fullData.name);
    assert.equal(location.category, requestData.fullData.category);
    assert.equal(location.description, requestData.fullData.description);

    assert.notEqual(location.id, null);
    assert.isNotNull(location.officeDistance);
  });

  it('SAD: should return location entity with only safe values', async () => {
    const data = new Location(requestData.valid);
    const location = await LocationRepository.save(data);
    assert.equal(location.latitude, requestData.extraData.latitude);
    assert.equal(location.longitude, requestData.extraData.longitude);
    expect(location).to.not.include(
      {
        noValidAttribute: requestData.extraData.noValidAttribute,
      },
    );

    assert.notEqual(location.id, null);
    assert.isNotNull(location.officeDistance);
  });

  it('BAD: should not allow store different entities', async () => {
    const fakeData = {
      test: 'fakeData',
      data: '',
    };
    await expect(LocationRepository.save(fakeData)).to.be.rejectedWith(Error);
  });
});

/* eslint-env mocha */
const mochaPlugin = require('serverless-mocha-plugin');

const { assert, expect } = mochaPlugin.chai;
const { detailSample, allSampleData } = require('../_helpers/data.helper');
const { setData, createTable, deleteTable } = require('../_helpers/db.helper');
const { LocationRepository } = require('./../../src/domain/repository/locations');

describe('Unit Test: Repository with empty database', () => {
  before((done) => {
    createTable().then(() => {
      done();
    }).catch(e => done(e));
  });

  it('SAD: should return false empty location', async () => {
    const location = await LocationRepository.all();
    assert.equal(location, false);
  });

  it('SAD: should return false non existing location', async () => {
    const location = await LocationRepository.getById(detailSample.id);
    assert.equal(location, false);
  });

  after((done) => {
    deleteTable().then(() => {
      done();
    }).catch(e => done(e));
  });
});

describe('Unit Test:  Repository with sample data', () => {
  before((done) => {
    createTable().then(() => setData()
      .then(() => done()))
      .catch(e => done(e));
  });

  it('HAPPY: should return 3 location', async () => {
    const location = await LocationRepository.all();
    assert.equal(location.length, 3);
  });

  it('HAPPY: should return location with all the attributes', async () => {
    const location = await LocationRepository.getById(detailSample.id);
    expect(location).to.have.all.keys(
      'id',
      'longitude',
      'latitude',
      'officeDistance',
      'category',
      'name',
      'description',
    );
  });

  it('HAPPY: should return location with only required attributes', async () => {
    const location = await LocationRepository
      .getById(allSampleData.locations[1].id);
    expect(location).to.have.all.keys(
      'id',
      'name',
      'longitude',
      'latitude',
    );
  });

  after((done) => {
    deleteTable().then(() => {
      done();
    }).catch(e => done(e));
  });
});

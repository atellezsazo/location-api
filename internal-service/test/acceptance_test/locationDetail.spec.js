/* eslint-env mocha */
const mochaPlugin = require('serverless-mocha-plugin');

const wrapped = mochaPlugin.getWrapper('locationDetail',
  '/src/API/endpoints/location.js', 'detail');

const { assert, expect } = mochaPlugin.chai;
const { detailSample, allSampleData } = require('../_helpers/data.helper');
const { setData, createTable, deleteTable } = require('../_helpers/db.helper');

describe('Acceptance Test: locationDetail', () => {
  before((done) => {
    createTable().then(() => setData()
      .then(() => done()))
      .catch(e => done(e));
  });

  it('HAPPY: Return location with all attributes', () => wrapped.run({
    pathParameters: { id: detailSample.id },
  })
    .then((response) => {
      assert.equal(response.statusCode, 200);
      expect(JSON.parse(response.body)).to.have.all.keys(
        'id',
        'longitude',
        'latitude',
        'officeDistance',
        'category',
        'name',
        'description',
      );
      expect(response).to.not.be.empty;
    }));

  it('HAPPY: Return location with required attributes', () => wrapped.run({
    pathParameters: { id: allSampleData.locations[1].id },
  })
    .then((response) => {
      assert.equal(response.statusCode, 200);
      expect(JSON.parse(response.body)).to.have.all.keys(
        'id',
        'longitude',
        'latitude',
      );
      expect(response).to.not.be.empty;
    }));

  it('BAD: Request using invalid id', () => wrapped.run({
    pathParameters: { id: 'fake-id' },
  })
    .then((response) => {
      assert.equal(response.statusCode, 404);
      expect(response).to.not.be.empty;
    }));

  after((done) => {
    deleteTable().then(() => {
      done();
    }).catch(e => done(e));
  });
});

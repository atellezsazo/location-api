/* eslint-env mocha */
const mochaPlugin = require('serverless-mocha-plugin');

const wrapped = mochaPlugin.getWrapper('listLocations',
  '/src/API/endpoints/locations.js', 'list');

const { assert, expect } = mochaPlugin.chai;
const { setData, createTable, deleteTable } = require('../_helpers/db.helper');

describe('Acceptance Test: listLocations - Database empty', () => {
  before((done) => {
    createTable().then(() => {
      done();
    }).catch(e => done(e));
  });

  it('SAD: Not empty response', () => wrapped.run()
    .then((response) => {
      assert.equal(response.statusCode, 204);
      expect(response).to.not.be.empty;
    }));

  after((done) => {
    deleteTable().then(() => {
      done();
    }).catch(e => done(e));
  });
});

describe('Acceptance Test: listLocations - Database with sample data', () => {
  before((done) => {
    createTable().then(() => setData()
      .then(() => done()))
      .catch(e => done(e));
  });

  it('HAPPY: should return 3 location', () => wrapped.run()
    .then((response) => {
      assert.equal(response.statusCode, 200);
      assert.equal(JSON.parse(response.body).locations.length, 3);
    }));

  after((done) => {
    deleteTable().then(() => {
      done();
    }).catch(e => done(e));
  });
});

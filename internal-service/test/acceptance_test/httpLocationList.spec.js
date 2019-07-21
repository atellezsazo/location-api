/* eslint-env mocha */
const { expect, assert } = require('chai');
const request = require('supertest');

const { setData, createTable, deleteTable } = require('../_helpers/db.helper');

const server = request('http://localhost:3000');

describe('API Acceptance Test: listLocations - Database empty', () => {
  before((done) => {
    createTable().then(() => {
      done();
    }).catch(e => done(e));
  });

  it('HAPPY: [GET] /locations -  Return 204', (done) => {
    server.get('/locations')
      .set('Accept', 'application/json')
      .expect(204)
      .expect('Content-Type', /json/)
      .end((error) => {
        if (error) return done(error);
        return done();
      });
  });

  after((done) => {
    deleteTable().then(() => {
      done();
    }).catch(e => done(e));
  });
});

describe('API Acceptance Test: listLocations - Database with sample data', () => {
  before((done) => {
    createTable().then(() => setData()
      .then(() => done()))
      .catch(e => done(e));
  });

  it('HAPPY: [GET] /locations -  Should return 3 location', (done) => {
    server.get('/locations')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((error, response) => {
        if (error) return done(error);
        expect(response.body).to.not.be.empty;
        assert.equal(response.body.locations.length, 3);
        return done();
      });
  });

  after((done) => {
    deleteTable().then(() => {
      done();
    }).catch(e => done(e));
  });
});

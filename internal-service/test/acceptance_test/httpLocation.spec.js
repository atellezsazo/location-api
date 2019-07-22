/* eslint-env mocha */
const { expect } = require('chai');
const request = require('supertest');

const { detailSample, allSampleData } = require('../_helpers/data.helper');
const { setData, createTable, deleteTable } = require('../_helpers/db.helper');

const server = request('http://localhost:3000');

describe('API Acceptance Test: locationDetail', () => {
  before((done) => {
    createTable().then(() => setData()
      .then(() => done()))
      .catch(e => done(e));
  });

  it('HAPPY: [GET] /locations/{id} -  Return location with all attributes', (done) => {
    server.get(`/locations/${detailSample.id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((error, response) => {
        if (error) return done(error);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.have.all.keys(
          'id',
          'longitude',
          'latitude',
          'officeDistance',
          'category',
          'name',
          'description',
        );
        return done();
      });
  });

  it('HAPPY: [GET] /locations/{id} - Return location with required attributes', (done) => {
    server.get(`/locations/${allSampleData.locations[1].id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((error, response) => {
        if (error) return done(error);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.have.all.keys(
          'id',
          'name',
          'longitude',
          'latitude',
        );
        return done();
      });
  });

  it('HAPPY: [SAD] /locations/fake-id - Request using invalid id', (done) => {
    server.get('/locations/fake-id')
      .set('Accept', 'application/json')
      .expect(404)
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

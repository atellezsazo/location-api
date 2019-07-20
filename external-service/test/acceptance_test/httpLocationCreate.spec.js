/* eslint-env mocha */

const { expect } = require('chai');
const request = require('supertest');

const { requestData } = require('../_helpers/data.helper');

describe('API Acceptance Test:', () => {
  const server = request('http://localhost:3000');

  it('HAPPY: [POST] /location - Simple valid request', (done) => {
    server.post('/location')
      .send(requestData.valid)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end((error, response) => {
        if (error) return done(error);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.have.all.keys('id', 'longitude', 'latitude', 'officeDistance');
        return done();
      });
  });


  it('HAPPY: [POST] /location - Full valid request', (done) => {
    server.post('/location')
      .send(requestData.fullData)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end((error, response) => {
        if (error) return done(error);
        expect(response.body).to.not.be.empty;
        expect(response.body).to.have.all.keys(
          'id',
          'longitude',
          'latitude',
          'name',
          'officeDistance',
          'category',
          'description',
        );
        return done();
      });
  });

  it('BAD: [POST] /location - Invalid request', (done) => {
    server.post('/location')
      .send(requestData.invalid)
      .set('Accept', 'application/json')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((error, response) => {
        if (error) return done(error);
        expect(response.body).to.not.be.empty;
        return done();
      });
  });

  it('BAD: [POST] /location - Empty request', (done) => {
    server.post('/location')
      .send()
      .set('Accept', 'application/json')
      .expect(400)
      .expect('Content-Type', /json/)
      .end((error, response) => {
        if (error) return done(error);
        expect(response.body).to.not.be.empty;
        return done();
      });
  });
});

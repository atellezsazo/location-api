/* eslint-env mocha */

const chai = require('chai');

const { assert } = chai;
const { coordinates } = require('../_helpers/data.helper');
const { calcDistance } = require('./../../src/domain/entities/values/distance');

describe('Unit Test: Distance Calculator', () => {
  it('HAPPY: should return zero', () => {
    const distance = calcDistance(coordinates.office, coordinates.office);
    assert.equal(distance, 0);
  });

  it('HAPPY: should return bigger than zero', () => {
    const distance = calcDistance(coordinates.office, coordinates.correct, 'N');
    assert.isAbove(distance, 0);
  });

  it('HAPPY: should return bigger above to 9344 Km', () => {
    const distance = calcDistance(coordinates.office, coordinates.correct);
    assert.isAbove(distance, 9344);
  });

  it('SAD: should not return a positive distance', () => {
    const distance = calcDistance(coordinates.incorrect, coordinates.office);
    assert.equal(distance, 0);
  });
});

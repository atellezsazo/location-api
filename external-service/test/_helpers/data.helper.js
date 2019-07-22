const { officeLocation } = require('./../../config/constants');

const coordinates = {
  office: {
    latitude: officeLocation.latitude,
    longitude: officeLocation.longitude,
  },
  correct: {
    latitude: 17.2239583,
    longitude: -89.6246195,
  },
  incorrect: {
    latitude: 77.11112223331,
    longitude: 249.99999999,
  },
};

exports.requestData = {
  valid: {
    name: 'Testing name',
    ...coordinates.correct,
  },
  invalid: {
    ...coordinates.incorrect,
    name: 'No in earth',
  },
  invalid_no_required: {
    description: 'Lorem ipsum....',
    category: 'Tourist place',
  },
  fullData: {
    ...coordinates.correct,
    name: 'Tikal: Guatemala',
    description: 'Lorem ipsum....',
    category: 'Tourist place',
  },
  extraData: {
    ...coordinates.correct,
    name: 'Tikal: Guatemala',
    noValidAttribute: 'Lorem ipsum ...',
  },
};

exports.coordinates = coordinates;

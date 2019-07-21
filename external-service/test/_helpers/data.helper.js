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
    ...coordinates.correct,
  },
  invalid: {
    ...coordinates.incorrect,
    name: 'No in earth',
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

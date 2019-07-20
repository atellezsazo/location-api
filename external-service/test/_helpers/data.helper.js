const coordinates = {
  office: {
    latitude: 52.502931,
    longitude: 13.408249,
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

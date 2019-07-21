const isValidCoordinates = require('is-valid-coordinates');
const geolib = require('geolib');

const equalDistance = (coordinatesStart, coordinatesEnd) => {
  if (coordinatesStart.latitude === coordinatesEnd.latitude
    && coordinatesStart.longitude === coordinatesEnd.longitude) {
    return true;
  }
  return false;
};

const validCoordinates = coordinate => isValidCoordinates(
  coordinate.longitude,
  coordinate.latitude,
);

const calcDistance = (coordinatesStart, coordinatesEnd) => {
  if (equalDistance(coordinatesStart, coordinatesEnd)
    || !validCoordinates(coordinatesStart)
    || !validCoordinates(coordinatesEnd)) {
    return 0;
  }

  const distance = geolib.getDistance(
    coordinatesStart,
    coordinatesEnd,
  );
  return distance / 1000;
};

module.exports = {
  calcDistance,
};

const isValidCoordinates = require('is-valid-coordinates');
const geolib = require('geolib');

const calcDistance = (coordinatesFrom, coordinatesTo) => {
  if ((coordinatesFrom.latitude === coordinatesTo.latitude
    && coordinatesFrom.longitude === coordinatesTo.longitude)
    || (!isValidCoordinates(coordinatesFrom.longitude, coordinatesFrom.latitude)
      || !isValidCoordinates(coordinatesTo.longitude, coordinatesTo.latitude))) {
    return 0;
  }

  const distance = geolib.getDistance(
    coordinatesFrom,
    coordinatesTo,
  );

  return distance / 1000;
};

module.exports = {
  calcDistance,
};

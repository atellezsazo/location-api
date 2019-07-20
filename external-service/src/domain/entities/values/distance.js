const isValidCoordinates = require('is-valid-coordinates');

const calcDistance = (coordinatesFrom, coordinatesTo, unit = 'K') => {
  if ((coordinatesFrom.latitude === coordinatesTo.latitude
    && coordinatesFrom.longitude === coordinatesTo.longitude)
    || (!isValidCoordinates(coordinatesFrom.longitude, coordinatesFrom.latitude)
      || !isValidCoordinates(coordinatesTo.longitude, coordinatesTo.latitude))) {
    return 0;
  }

  const radLat1 = Math.PI * coordinatesFrom.latitude / 180;
  const radLat2 = Math.PI * coordinatesTo.latitude / 180;
  const theta = coordinatesFrom.longitude - coordinatesTo.longitude;
  const radTheta = Math.PI * theta / 180;
  let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1)
    * Math.cos(radLat2) * Math.cos(radTheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === 'K') { dist *= 1.609344; }
  if (unit === 'N') { dist *= 0.8684; }
  return dist;
};

module.exports = {
  calcDistance,
};

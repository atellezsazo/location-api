const isValidCoordinates = require('is-valid-coordinates');

const { calcDistance } = require('./values/distance');
const { officeLocation } = require('./../../../config/constants');

class Location {
  constructor({
    longitude,
    latitude,
    name = '',
    category = '',
    description = '',
  }) {
    this.id = null;
    this.name = name;
    this.category = category;
    this.description = description;
    this.latitude = parseFloat(latitude);
    this.longitude = parseFloat(longitude);

    if (this.validCoordinates()) {
      this.officeDistance = calcDistance(
        officeLocation,
        this.coordinates(),
      );
    } else {
      throw new Error('Invalid coordinates');
    }
  }

  validCoordinates() {
    return isValidCoordinates(this.longitude, this.latitude);
  }

  setId(id) {
    this.id = id;
  }

  coordinates() {
    return {
      latitude: this.latitude,
      longitude: this.longitude,
    };
  }
}

module.exports = {
  Location,
};

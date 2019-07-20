const HttpStatus = require('http-status');

const { Location } = require('../../domain/entities/location');
const { LocationRepository } = require('../../domain/repositories/locations');

const validateRequest = (req) => {
  try {
    const body = (typeof (req) === 'object') ? req : JSON.parse(req);
    return new Location(body);
  } catch (e) {
    throw new Error('Invalid request');
  }
};

const storeLocation = async (location) => {
  const newLocation = await LocationRepository.save(location);
  return {
    statusCode: HttpStatus.CREATED,
    body: JSON.stringify(newLocation),
  };
};

exports.createLocation = async (req, callback) => {
  try {
    const location = validateRequest(req);
    const response = await storeLocation(location);
    return callback(null, response);
  } catch (err) {
    if (err.message === 'Invalid request') {
      return callback({
        statusCode: HttpStatus.BAD_REQUEST,
        body: JSON.stringify({
          error: err.message,
        }),
      });
    }
    return callback({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      body: JSON.stringify({
        error: 'At this moment is not possible process your request.',
      }),
    });
  }
};

const HttpStatus = require('http-status');

const { LocationRepository } = require('../../domain/repository/locations');

const getDetail = async (locationId) => {
  const location = await LocationRepository.getById(locationId);

  if (!location) {
    return {
      statusCode: HttpStatus.NOT_FOUND,
    };
  }

  return {
    statusCode: HttpStatus.OK,
    body: JSON.stringify(location),
  };
};

exports.getLocation = async (id, callback) => {
  try {
    const result = await getDetail(id);
    return callback(null, result);
  } catch (err) {
    return callback({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      body: JSON.stringify({
        error: 'At this moment is not possible process your request.',
      }),
    });
  }
};

const HttpStatus = require('http-status');

const { LocationRepository } = require('./../../domain/repository/locations');

const getAll = async () => {
  const locations = await LocationRepository.all();

  if (!locations) {
    return {
      statusCode: HttpStatus.NO_CONTENT,
    };
  }

  return {
    statusCode: HttpStatus.OK,
    body: JSON.stringify({ locations }),
  };
};

exports.listLocations = async (callback) => {
  try {
    const result = await getAll();
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

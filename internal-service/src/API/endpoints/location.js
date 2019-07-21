const { getLocation } = require('../use_cases/get_location');

module.exports.detail = async ({ pathParameters }) => getLocation(pathParameters.id,
  (err, res) => {
    if (err) {
      return err;
    }
    return res;
  });

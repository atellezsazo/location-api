const { createLocation } = require('./../use_cases/create_locations');

module.exports.submit = async ({ body }) => createLocation(body,
  (err, res) => {
    if (err) {
      return err;
    }
    return res;
  });

const { listLocations } = require('../use_cases/list_locations');

module.exports.list = async () => listLocations(
  (err, res) => {
    if (err) {
      return err;
    }
    return res;
  },
);

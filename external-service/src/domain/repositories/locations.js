const uuid = require('uuid/v1');

const { db, tableName } = require('./../../../config/database');

const removeEmptyValues = (location) => {
  const locationJSON = location;
  Object.keys(location)
    .forEach(key => (location[key] == null || location[key] === '')
      && delete locationJSON[key]);
  return locationJSON;
};

const save = async (location) => {
  try {
    location.setId(uuid());

    const data = {
      TableName: tableName,
      Item: removeEmptyValues(location),
    };

    return db.put(data).promise()
      .then(() => location);
  } catch (e) {
    throw new Error('DB ERROR: Error to insert a new document in our database');
  }
};

exports.LocationRepository = {
  save,
};

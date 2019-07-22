const { db, tableName } = require('./../../../config/database');

const all = async () => {
  try {
    const data = {
      TableName: tableName,
      ProjectionExpression: 'id, #n ,latitude, longitude',
      ExpressionAttributeNames: { '#n': 'name' },
    };

    const locations = await db.scan(data).promise();
    if (locations.Count > 0) {
      return locations.Items;
    }
    return false;
  } catch (e) {
    throw new Error('DB ERROR: Error to read all documents in our database');
  }
};

const getById = async (id) => {
  try {
    const data = {
      TableName: tableName,
      Key: {
        id,
      },
    };

    const location = await db.get(data).promise();
    if (location.Item) {
      return location.Item;
    }
    return false;
  } catch (e) {
    throw new Error('DB ERROR: Error to read the document in our database');
  }
};

exports.LocationRepository = {
  all,
  getById,
};

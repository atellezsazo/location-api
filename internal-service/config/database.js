const AWS = require('aws-sdk');

const { IS_OFFLINE, LOCATION_TABLE, STAGE } = process.env;

if (IS_OFFLINE === 'true' || STAGE === 'test') {
  AWS.config.update({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  });
}

const client = new AWS.DynamoDB();
const db = new AWS.DynamoDB.DocumentClient();

module.exports = {
  db,
  client,
  tableName: LOCATION_TABLE,
};

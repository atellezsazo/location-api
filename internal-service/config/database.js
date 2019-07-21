const AWS = require('aws-sdk');

const { IS_OFFLINE, LOCATION_TABLE, STAGE } = process.env;

const dynamoDb = IS_OFFLINE === 'true' || STAGE === 'test'
  ? new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  })
  : new AWS.DynamoDB.DocumentClient();

module.exports = {
  db: dynamoDb,
  tableName: LOCATION_TABLE,
};

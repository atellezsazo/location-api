const { tableName, client } = require('./../../config/database');
const { populateTable } = require('./data.helper');

exports.stage = 'test';

exports.setData = () => {
  const buildSetData = {
    RequestItems: {
      [tableName]: populateTable,
    },
  };

  return client.batchWriteItem(buildSetData).promise();
};

exports.createTable = () => {
  const table = {
    TableName: tableName,
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  };

  return client.createTable(table).promise();
};

exports.deleteTable = () => {
  const params = {
    TableName: tableName,
  };
  return client.deleteTable(params).promise();
};

const { db } = require('./../../config/database');

exports.stage = 'test';

exports.setData = (dataSet, done) => {
  const buildSetData = { RequestItems: {} };
  dataSet.forEach((data) => {
    buildSetData.RequestItems[data.table] = data.items.map(
      Item => ({ PutRequest: { Item } }),
    );
  });

  db.batchWriteItem(buildSetData, (err) => {
    if (err) return done(err);
    return done();
  });
};


exports.emptyTables = (tableNames, done) => {
  const that = this;
  if (tableNames.length === 0) return done();
  const tableName = tableNames[0];
  const reduceTableNames = tableNames.slice(1, tableNames.length);
  const scanParams = {
    TableName: tableName.table,
  };

  return db.scan(scanParams, (err, data) => {
    if (err) return done(err);
    const buildDeleteData = {
      RequestItems: { [scanParams.TableName]: [] },
    };
    data.Items.forEach((obj) => {
      const hashKeys = {};
      tableName.hashKey.forEach(
        (key) => { hashKeys[key] = obj[key]; },
      );
      buildDeleteData.RequestItems[scanParams.TableName].push(
        { DeleteRequest: { Key: hashKeys } },
      );
    });
    return db.batchWriteItem(buildDeleteData, (error) => {
      if (error) return done(error);
      return that.emptyTables(reduceTableNames, done);
    });
  });
};

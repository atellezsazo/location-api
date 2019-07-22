exports.allSampleData = {
  locations: [
    {
      id: '1c4b6350-ab8a-11e9-8e14-93c3901ccb3f',
      name: 'Testing name',
      latitude: 17.2239583,
      longitude: -89.6246195,
    },
    {
      id: '375436d0-ab9a-11e9-b303-87706ee3d4da',
      name: 'Testing name',
      latitude: 25.0478,
      longitude: 121.5318,
    },
    {
      id: 'df33b4f0-ab97-11e9-87c5-fb9948e48f62',
      name: 'Testing name',
      latitude: 27.1750199,
      longitude: 78.0399665,
    },
  ],
};

exports.populateTable = [
  {
    PutRequest: {
      Item: {
        id: { S: '1c4b6350-ab8a-11e9-8e14-93c3901ccb3f' },
        latitude: { S: '17.2239583' },
        longitude: { S: '-89.6246195' },
        officeDistance: { S: '9355.442' },
        category: { S: 'Archaeological place' },
        description: { S: 'Tikal is the ruin of an mayan ancient city' },
        name: { S: 'Tikal, Guatemala' },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        id: { S: '375436d0-ab9a-11e9-b303-87706ee3d4da' },
        name: { S: 'Testing name' },
        latitude: { S: '17.2239583' },
        longitude: { S: '-89.6246195' },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        id: { S: 'df33b4f0-ab97-11e9-87c5-fb9948e48f62' },
        name: { S: 'Testing name' },
        latitude: { S: '17.2239583' },
        longitude: { S: '-89.6246195' },
      },
    },
  },
];

exports.detailSample = {
  officeDistance: 9355.442,
  longitude: -89.6246195,
  category: 'Archaeological place',
  description: 'Tikal is the ruin of an mayan ancient city',
  id: '1c4b6350-ab8a-11e9-8e14-93c3901ccb3f',
  latitude: 17.2239583,
  name: 'Tikal, Guatemala',
};

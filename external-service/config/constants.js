const officeLocation = {
  latitude: parseFloat(process.env.OFFICE_LATITUDE),
  longitude: parseFloat(process.env.OFFICE_LONGITUDE),
};

module.exports = {
  officeLocation,
};

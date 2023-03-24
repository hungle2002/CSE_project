const deviceState = require("./device");
const condition = require("./condition");
const serverRecord = require("./serverRecord")// for initial testing purposes only; delete this line when in implementation

const routes = {
  deviceState,
  condition,
  serverRecord, // for initial testing purposes only; delete this line when in implementation
};

module.exports = routes;

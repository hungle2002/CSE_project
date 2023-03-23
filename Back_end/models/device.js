const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: [true, "DeviceSchema: Device's ID required!"],
    unique: true
  },
  typ: {
    type: String,
    required: [true, "DeviceSchema: Device's type required!"]
  },
  state: {
    type: Boolean,      // false -> off
    default: false 
  },
  price: {
    type: Number,
    required: [true, "DeviceSchema: Device's price required!"]
  },
  location: {
    type: String,
    required: [true, "DeviceSchema: Device's location required!"]
  },
  usingTime: {
    type: Number,     // in minutes
    required: [true, "DeviceSchema: Device's usage time required!"]
  },
  startOn: {
    type: Date,
    required: [true, "DeviceSchema: Device's usage's start date required!"]
  },
  lastChecked: {
    type: Date,
    required: [true, "DeviceSchema: Device's time of last checkup required!"]
  }
});

module.exports = mongoose.model("Device", deviceSchema);
